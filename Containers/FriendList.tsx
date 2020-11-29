import { StackNavigationProp } from '@react-navigation/stack';
import { Container, Content, Header, Text, Item, List, ListItem, Input, Icon, Button, Image, Footer, FooterTab } from 'native-base';
import React from 'react';
import { AppScreens, AuthStackParamList } from '../AuthFlowScreen';

type FriendListNavigationProps = StackNavigationProp<AuthStackParamList,AppScreens.FriendList>
export type FriendListParams = {
    username: string
}

interface FriendListScreenProps {
    route: {params: FriendListParams}
    navigation: FriendListNavigationProps
}

const FriendList: React.FunctionComponent<FriendListScreenProps> = (props) => {
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
                setLoaded(true);
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

export default FriendList;