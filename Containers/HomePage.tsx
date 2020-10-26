import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Container, Content, Header, Text } from 'native-base';
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
            <Header/>
            <Content>
    <Text>Hello, {route.params.username}</Text>
                <Text>A home screen window</Text>
                <Button onPress={() => navigation.navigate("ScanningPage")}><Text>QR Scanner</Text></Button>
            </Content>
        </Container>
    );
}

export default HomePage;