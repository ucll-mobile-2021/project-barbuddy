import { StyleSheet, View, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Container, Content, Header, Text, Item, List, Input, Icon, Button,  Footer, FooterTab } from 'native-base';
import React, {useEffect} from 'react';
import { AppScreens, AuthStackParamList } from '../AuthFlowScreen';
import { getData } from '../Database';
import * as Font from "expo-font";
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { ListItem, Avatar } from 'react-native-elements';
//import LinearGradient from 'react-native-linear-gradient';



type ProfilePageNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.ProfilePage>
export type ProfilePageParams = {
    username: string
}

interface ProfilePageScreenProps {
    route: { params: ProfilePageParams }
    navigation: ProfilePageNavigationProps
}
const ProfilePage: React.FunctionComponent<ProfilePageScreenProps> = (props) => {
    const { navigation, route } = props;
    const [currentUser, setCurrentUser] = React.useState("");
    const [barList, setBarList] = React.useState("");
    const [isLoaded, setLoaded] = React.useState(false);

    useEffect(() => {
        getData("current").then(response => {
            if(response === "")
            {
                navigation.navigate("ProfilePage");
                return;
            }
            setCurrentUser(response);

            getData("barList").then((response2) => {
                setBarList(response2);
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

    const GetCurrentUser = () => {
        return JSON.parse(currentUser);
    }

    const GetBarList = () => {
            return JSON.parse(barList).map((bar: {id: any; Name: any; Location: any}) => {
                return {
                    id: bar.id,
                    Name: bar.Name,
                    Location: bar.Location
                }
            });
    }

    if(isLoaded)
    {

    return (
        <Container>

            <Content style={styles.content}>
            {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}> */}
                <View>
                <View style={styles.header}>
                
                    <View style={styles.headerContent}>

                        <Image style={styles.avatar} source={{uri: 'https://i.ibb.co/k47jXWr/Alfons.png'}}/>
                        <Text style={styles.nameUser}>Alfons Piwiet</Text>

                    </View>
                    
                </View>
               
                </View>
                {/* </LinearGradient> */}

                <View style={styles.topBars}>
                <List>
                        
                    
                        <ListItem bottomDivider style={styles.bottomDeviderList}>
                            
                            <Avatar source={{uri: 'https://i.ibb.co/D4KtD4g/BarO.png'}} />
                            <ListItem.Content >
                                <ListItem.Title>{'Favorite bar'}</ListItem.Title>
                                <ListItem.Subtitle>{'Bar O'}</ListItem.Subtitle>
                            </ListItem.Content>
                          

                        </ListItem>

                        <ListItem bottomDivider style={styles.bottomDeviderList}>
                            <Avatar source={{uri: 'https://i.ibb.co/wY0GvnC/BarL.png'}} />
                            <ListItem.Content>
                                <ListItem.Title>{'Second favorite bar'}</ListItem.Title>
                                <ListItem.Subtitle>{'Bar L'}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>

                        <ListItem bottomDivider style={styles.bottomDeviderList}>
                            <Avatar source={{uri: 'https://i.ibb.co/rcz2Nzp/BarG.png'}} />
                            <ListItem.Content>
                                <ListItem.Title>{'Third favorite bar'}</ListItem.Title>
                                <ListItem.Subtitle>{'Bar G'}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    </List>
            

                </View>             
                        
                

            <View style={styles.allTheBars}>
            <Text style={styles.headingText}>All the bars you've loged into</Text>
            <ScrollView style={styles.scrollView}>
                {
                        GetBarList().map((bar: {id: any, Name: any, Location: any, avatar_url:any}) => {
                            return (
                                <ListItem key={bar.id} bottomDivider style={styles.bottomDeviderList}>
                                
                                    <Avatar source={{uri:bar.avatar_url}} />
                                    <ListItem.Content>
                                        <ListItem.Title>{bar.Name}</ListItem.Title>
                                        <ListItem.Subtitle>{bar.Location}</ListItem.Subtitle>
                                    </ListItem.Content> 
                                </ListItem>
                                );
                            })}

                </ScrollView>
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
                    <Button onPress={() => navigation.navigate("ReviewPage")}>
                        <Icon style={styles.footerIcon} name="star" />
                        <Text style={styles.footerText}>Review</Text>
                    </Button>
                    <Button onPress={() => navigation.navigate("ProfilePage")}>
                        <Icon style={styles.footerIcon} name="person" />
                        <Text style={styles.footerText}>Profile</Text>
                    </Button>
                    <Button onPress={() => navigation.navigate("ScanningPage")}>
                        <Icon style={styles.footerIcon} name="camera" />
                        <Text style={styles.footerText}>QR Scan</Text>
                    </Button>
                </FooterTab>
            </Footer>
            
        </Container>
    );
    }
    else
    {
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    content:{
        
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
        backgroundColor:'#1f1f1f', 

    },
    headerContent:{
        padding:30,
        alignItems: 'center',
        
    },
    avatar:{
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "#FFC229", //yellow
        marginBottom:10,
    },
    nameUser:{
        fontSize:45,
        color: '#FFC229', //yellow
        fontWeight:'600',

    },
    headingText: { // 'all the bars youve logd into'
        color: '#FFC229',
        //backgroundColor: '#1a1a1a',
        backgroundColor: '#1f1f1f', //darkgray 
        fontSize: 20,
        fontWeight:'normal',
        padding: 15,
        //paddingHorizontal:20
    },
    topBars:{
        opacity: 0.95
        
    },
    allTheBars:{
        opacity: 0.95
        
    },
    scrollView: {
        height: 200,
        
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

export default ProfilePage;