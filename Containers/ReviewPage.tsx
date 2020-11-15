import { StyleSheet, View, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Container, Content, Header, Text, Item, List, Input, Icon, Button,  Footer, FooterTab } from 'native-base';
import React from 'react';
import { AppScreens, AuthStackParamList } from '../AuthFlowScreen';
import { ScrollView } from 'react-native-gesture-handler';
import { ListItem, Avatar } from 'react-native-elements';



type ReviewPageNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.ReviewPage>
export type ReviewPageParams = {
    username: string
}

interface ReviewPageScreenProps {
    route: { params: ReviewPageParams }
    navigation: ReviewPageNavigationProps
}
const ReviewPage: React.FunctionComponent<ReviewPageScreenProps> = (props) => {
    const { navigation, route } = props;
    
    return (
        <Container>

            <Content style={styles.content}>
  
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

export default ReviewPage;