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
                    <List>
                        <ListItem>
                            <Text>Friend 1</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Friend 2</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Friend 3</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Friend 3</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Friend 4</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Friend 5</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Friend 6</Text>
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