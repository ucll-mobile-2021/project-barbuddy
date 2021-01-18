import { StackNavigationProp } from '@react-navigation/stack';
import { Container, Content, Header, Text, Item, List, Input, Icon, Button, Footer, FooterTab } from 'native-base';
import React, { useEffect } from 'react';
import { AppScreens, AuthStackParamList } from '../AuthFlowScreen';
import { getData, storeData } from '../Database';
import * as Font from "expo-font";
import { Ionicons } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';


type FriendListNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.FriendList>
export type FriendListParams = {
    username: string
}

interface FriendListScreenProps {
    route: { params: FriendListParams }
    navigation: FriendListNavigationProps
}
const FriendList: React.FunctionComponent<FriendListScreenProps> = (props) => {
    const { navigation, route } = props;
    const [currentUser, setCurrentUser] = React.useState("");
    const [friendList, setFriendList] = React.useState("");
    const [barList, setBarList] = React.useState("");
    const [isLoaded, setLoaded] = React.useState(false);
    const [search, setSearch] = React.useState("");

    useEffect(() => {
        getData("current").then(response => {
            if (response === "") {
                navigation.navigate("Login");
                return;
            }
            setCurrentUser(response);

            getData("users").then((response2) => {
                setFriendList(response2);
                getData("barList").then((response3) => {
                    setBarList(response3);
                    const LoadFonts = async () => {
                        await Font.loadAsync({
                            'Roboto': require('native-base/Fonts/Roboto.ttf'),
                            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
                            ...Ionicons.font,
                        });
                    }
                    LoadFonts().then(() => setLoaded(true));
                });
            });
        });
    });

    const Logout = () => {
        storeData("current", JSON.stringify("")).then(() => {
            navigation.navigate("Login");
        });
    }

    const ComradeDetails = (id: number) => {
        navigation.navigate("ComradePage", { id: id });
    }

    const GetCurrentUser = () => {
        return JSON.parse(currentUser);
    }

    const GetQRCodeValue = () => {
        let qr = {
            type: "friend",
            id: GetCurrentUser().id
        };
        return JSON.stringify(qr);
    }

    const GetFriendList = () => {
        if (search === "") {
            return JSON.parse(friendList).filter((friend: { id: any, Username: any, Password: any, Date: any, Firstname: any, Lastname: any, ProfilePic: any, Bars: any, Friends: any, Visiting: any }) => GetCurrentUser().Friends.includes(friend.id))
                .map((friend: { id: any, Username: any, Password: any, Date: any, Firstname: any, Lastname: any, ProfilePic: any, Bars: any, Friends: any, Visiting: any }) => {
                    let barName = "";
                    if (friend.Visiting !== null) {
                        barName = JSON.parse(barList).find((temp: any) => temp.id === friend.Visiting).Name;
                    }
                    return {
                        id: friend.id,
                        Firstname: friend.Firstname,
                        Lastname: friend.Lastname,
                        BarName: barName,
                        ProfilePic: friend.ProfilePic

                    }
                });
        }
        else {
            return JSON.parse(friendList).filter((friend: { id: any, Username: any, Password: any, Date: any, Firstname: any, Lastname: any, ProfilePic: any, Bars: any, Friends: any, Visiting: any }) => GetCurrentUser().Friends.includes(friend.id))
                .filter((friend: { id: any, Username: any, Password: any, Date: any, Firstname: any, Lastname: any, ProfilePic: any, Bars: any, Friends: any, Visiting: any }) => friend.Lastname.toLowerCase().startsWith(search.toLowerCase()) || friend.Firstname.toLowerCase().startsWith(search.toLowerCase()))
                .map((friend: { id: any, Username: any, Password: any, Date: any, Firstname: any, Lastname: any, ProfilePic: any, Bars: any, Friends: any, Visiting: any }) => {
                    let barName = "";
                    if (friend.Visiting !== null) {
                        barName = JSON.parse(barList).find((temp: any) => temp.id === friend.Visiting).Name;
                    }
                    return {
                        id: friend.id,
                        Firstname: friend.Firstname,
                        Lastname: friend.Lastname,
                        ProfilePic: friend.ProfilePic,
                        BarName: barName
                    }
                });
        }
    }

    if (isLoaded) {
        return (
            <Container>
                {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}> */}
                <Header searchBar rounded style={styles.header}>
                    <Item>
                        <Icon name="ios-search" />
                        <Input maxLength={50} placeholder="Search for a friend" onChangeText={text => setSearch(text)}></Input>
                        <Icon name="ios-people" />
                    </Item>
                </Header>
                <Content style={styles.content}>
                    <View style={styles.allTheBars}>
                        <Text style={styles.headingText}>Friendlist</Text>
                        <ScrollView style={styles.scrollView}>
                            {GetFriendList().length !== 0 ?
                                <List>
                                    {GetFriendList().map((friend: { id: any, Firstname: String, Lastname: String, BarName: String, ProfilePic: any }) => {
                                        return (
                                            <ListItem key={friend.id} bottomDivider style={styles.bottomDeviderList} onPress={() => ComradeDetails(Number(friend.id))}>
                                                <Avatar source={{ uri: friend.ProfilePic }} />
                                                <ListItem.Content>
                                                    <ListItem.Title>{friend.Firstname + ' ' + friend.Lastname} </ListItem.Title>
                                                    {friend.BarName === "" ? null : <ListItem.Subtitle>{'Last seen at: ' + friend.BarName}</ListItem.Subtitle>}
                                                </ListItem.Content>

                                            </ListItem>
                                        );
                                    })}
                                </List> : null}
                            {GetFriendList().length === 0 ?
                                <Text style={styles.headingText}>You haven't registered any of your friends yet.</Text> : null}
                        </ScrollView>
                    </View>
                    <View style={styles.qrView}>
                        <Text style={styles.headingText}>Personal QR code</Text>
                        <View style={styles.qr}>
                            <QRCode value={GetQRCodeValue()} size={200} />
                        </View>
                    </View>
                </Content>
                <Footer>
                    <FooterTab style={styles.footer}>
                        <Button onPress={() => navigation.navigate("HomePage")}>
                            <Icon style={styles.footerIcon} name="home" />
                            <Text style={styles.footerText}>Home</Text>
                        </Button>
                        <Button onPress={() => navigation.navigate("FriendList")}>
                            <Icon style={styles.footerIcon} name="people" />
                            <Text style={styles.footerText}>Friends</Text>
                        </Button>
                        <Button onPress={() => navigation.navigate("ProfilePage")}>
                            <Icon style={styles.footerIcon} name="person" />
                            <Text style={styles.footerText}>Profile</Text>
                        </Button>
                        <Button onPress={() => navigation.navigate("ScanningPage")}>
                            <Icon style={styles.footerIcon} name="camera" />
                            <Text style={styles.footerText}>QR Scan</Text>
                        </Button>
                        <Button onPress={() => Logout()}>
                            <Icon style={styles.footerIcon} name="exit" />
                            <Text style={styles.footerText}>Logout</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }

    else {
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    content: {

        backgroundColor: '#181818'// dark background colour
        //backgroundColor: '#f1f1f1'
    },
    // linearGradientHeader: {
    //     alignItems: 'center',
    // justifyContent: 'center',
    // borderRadius: 5,
    // height: 200,
    // width: 350,
    // },
    header: {
        backgroundColor: '#1f1f1f',

    },
    headerContent: {
        padding: 30,
        alignItems: 'center',

    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "#FFC229", //yellow
        marginBottom: 10,
    },
    nameUser: {
        fontSize: 45,
        color: '#FFC229', //yellow
        fontWeight: '600',

    },
    headingText: { // 'all the bars youve logd into'
        color: '#FFC229',
        //backgroundColor: '#1a1a1a',
        backgroundColor: '#1f1f1f', //darkgray 
        fontSize: 20,
        fontWeight: 'normal',
        padding: 15,
        //paddingHorizontal:20
    },
    topBars: {
        opacity: 0.95

    },
    allTheBars: {
        opacity: 0.95

    },
    qrView: {
        alignItems: "center"
    },
    qr: {
        backgroundColor: "#FFC229"
    },
    scrollView: {
        height: 350,
    },
    bottomDeviderList: {
        paddingVertical: 2,
        borderColor: '#FFC229', // yellow
        borderWidth: 1,

    },

    footer: {
        backgroundColor: '#FFC229', //yellow 
    },
    footerText: {
        fontSize: 9,
        color: 'black'
    },
    footerIcon: {
        color: '#1f1f1f' //drakgray
    }

});


export default FriendList;