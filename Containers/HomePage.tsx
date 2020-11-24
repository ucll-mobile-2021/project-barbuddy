import { StackNavigationProp } from '@react-navigation/stack';
import { Container, Content, Header, Text, Item, List, ListItem, Input, Icon, Button, Image, Footer, FooterTab } from 'native-base';
import React, {useEffect} from 'react';
import { AppScreens, AuthStackParamList } from '../AuthFlowScreen';
import { getData } from '../Database';
import * as Font from "expo-font";
import { Ionicons } from '@expo/vector-icons';

type HomePageNavigationProps = StackNavigationProp<AuthStackParamList,AppScreens.HomePage>

interface HomePageScreenProps {
    navigation: HomePageNavigationProps
}
    const HomePage: React.FunctionComponent<HomePageScreenProps> = (props) => {
        const [currentUser, setCurrentUser] = React.useState("");
        const [friendList, setFriendList] = React.useState("");
        const [isLoaded, setLoaded] = React.useState(false);

        useEffect(() => {
            getData("current").then(response => {
                if(response === "")
                {
                    navigation.navigate("Login");
                    return;
                }
                setCurrentUser(response);
                getData("friendList").then((response2) => {
                    setFriendList(response2);
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
        const GetFriendList = () => {
            return JSON.parse(friendList);
        }
        const {navigation} = props;

        if(isLoaded)
        {
            return (
                <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content>
                    <Text>Hello, {GetCurrentUser().Firstname}</Text>
                    <List>
                        {GetFriendList().map((friend: string) => {
                            return (
                                <ListItem key={friend}>
                                    <Text>{friend}</Text>
                                </ListItem>
                            );
                        })}
                    </List>
                    <Footer>
                        <FooterTab>
                            <Button  onPress={() => navigation.navigate("HomePage")}>
                                <Icon name="home" />
                                <Text style={{fontSize: 9}}>Home</Text>
                            </Button>
                            <Button onPress={() => navigation.navigate("FriendList")}>
                                <Icon name="people" />
                                <Text style={{fontSize: 9}}>Friends</Text>
                            </Button>
                            <Button onPress={() => navigation.navigate("ReviewPage")}>
                                <Icon name="star" />
                                <Text style={{fontSize: 9}}>Review</Text>
                            </Button>
                            <Button onPress={() => navigation.navigate("ProfilePage")}>
                                <Icon name="person" />
                                <Text style={{fontSize: 9}}>Profile</Text>
                            </Button>
                            <Button onPress={() => navigation.navigate("ScanningPage")}>
                                <Icon name="camera" />
                                <Text style={{fontSize: 9}}>QR Scan</Text>
                            </Button>
                       </FooterTab>
                    </Footer>
                </Content>
            </Container>
            );
        }
        else
        {
            return null;
        }
    }

    export default HomePage;