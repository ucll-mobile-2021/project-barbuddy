import { StackNavigationProp } from '@react-navigation/stack';
import { Container, Content, Header, Text, Item, List, Input, Icon, Button, Footer, FooterTab } from 'native-base';
import React, {useEffect} from 'react';
import { AppScreens, AuthStackParamList } from '../AuthFlowScreen';
import { getData } from '../Database';
import * as Font from "expo-font";
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';

type HomePageNavigationProps = StackNavigationProp<AuthStackParamList,AppScreens.HomePage>

interface HomePageScreenProps {
    navigation: HomePageNavigationProps
}
    const HomePage: React.FunctionComponent<HomePageScreenProps> = (props) => {
        const [currentUser, setCurrentUser] = React.useState("");
        const [barList, setBarList] = React.useState("");
        const [isLoaded, setLoaded] = React.useState(false);
        const [search, setSearch] = React.useState("");

        useEffect(() => {
            getData("current").then(response => {
                if(response === "")
                {
                    navigation.navigate("Login");
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
            if(search === "")
            {
                return JSON.parse(barList).map((bar: {id: any; Name: any; Location: any}) => {
                    return {
                        id: bar.id,
                        Name: bar.Name,
                        Location: bar.Location
                    }
                });
            }
            else
            {
                return JSON.parse(barList)
                .filter((bar: {id: any; Name: String; Location: any;}) => bar.Name.toLowerCase().startsWith(search.toLowerCase()))
                .map((bar: {id: any; Name: any; Location: any}) => {
                    return {
                        id: bar.id,
                        Name: bar.Name,
                        Location: bar.Location
                    }
                });
            }
        }

        const {navigation} = props;

        if(isLoaded)
        {
            return (
                <Container>
                <Header searchBar rounded style={styles.header}>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="search" />
                    </Item>
                    <Item>
                        <Input placeholder ="Search bar" onChangeText={text => setSearch(text)}></Input>
                    </Item>
                </Header>
                <Content style={styles.content}>
                    <View style={styles.allTheBars}>
                        <Text style={styles.headingText}>Hello, {GetCurrentUser().Firstname}</Text>
                        <ScrollView style={styles.scrollView}>
                            <List>
                                {GetBarList().map((bar: {id: any, Name: any, Location: any}) => {
                                    return (
                                        <ListItem key={bar.id} bottomDivider style={styles.bottomDeviderList}>
                                            <ListItem.Title>{bar.Name + ' '}
                                            </ListItem.Title>
                                            <ListItem.Subtitle>{'location: ' + bar.Location}</ListItem.Subtitle>
                                        </ListItem>
                                    );
                                })}
                            </List>
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
            height: 475,
            
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

    export default HomePage;