import { StackNavigationProp } from '@react-navigation/stack';
import { Container, Content, Header, Text, Item, List, ListItem, Input, Icon, Button, Image, Footer, FooterTab } from 'native-base';
import React from 'react';
import { AppScreens, AuthStackParamList } from '../AuthFlowScreen';

type HomePageNavigationProps = StackNavigationProp<AuthStackParamList,AppScreens.HomePage>
export type HomeScreenParams = {
    username: string
}

interface HomePageScreenProps {
    route: {params: HomeScreenParams}
    navigation: HomePageNavigationProps
}
    const HomePage: React.FunctionComponent<HomePageScreenProps> = (props) => {
        const {navigation, route} = props;
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
                    <Text>Hello, {route.params.username}</Text>
                    <List>
                        <ListItem>
                            <Text>Bar 1</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Bar 2</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Bar 3</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Bar 3</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Bar 4</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Bar 5</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Bar 6</Text>
                        </ListItem>
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
                            <Button onPress={() => navigation.navigate("Review")}>
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



    export default HomePage;