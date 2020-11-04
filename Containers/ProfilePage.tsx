import { StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Container, Content, Header, Text, Item, List, ListItem, Input, Icon, Button, Image, Footer, FooterTab } from 'native-base';
import React from 'react';
import { AppScreens, AuthStackParamList } from '../AuthFlowScreen';
import { ScrollView } from 'react-native-gesture-handler';

type ProfilePageNavigationProps = StackNavigationProp<AuthStackParamList,AppScreens.ProfilePage>
export type ProfilePageParams = {
    username: string
}

interface ProfilePageScreenProps {
    route: {params: ProfilePageParams}
    navigation: ProfilePageNavigationProps
}
    const ProfilePage: React.FunctionComponent<ProfilePageScreenProps> = (props) => {
        const {navigation, route} = props;
        return (
            <Container>

                <Content>
                    
                        <Text style={styles.headingText}>Personal info</Text>

                        <Text>This is my personal info Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tempora, est non atque quia rerum quibusdam ut, nobis, recusandae vel voluptatem amet illum praesentium quos impedit odio ipsam. Possimus, velit?</Text>
             
                        <Text style={styles.headingText}>Your top 3 bars</Text>

                        <List>
                                        <ListItem><Text>nr 1 favo bar</Text></ListItem>
                                        <ListItem><Text>nr 2 favo bar</Text></ListItem>
                                        <ListItem><Text>nr 3 favo bar</Text></ListItem>
                        </List> 

                         <Text style={styles.headingText}>All the bars you've loged into</Text> 

                        <ScrollView style={styles.scrollView}>

                                        <List>
                                            <ListItem><Text>24th bar</Text></ListItem>
                                            <ListItem><Text>23rd bar</Text></ListItem>
                                            <ListItem><Text>22nd bar</Text></ListItem>
                                            <ListItem><Text>21st bar</Text></ListItem>
                                            <ListItem><Text>20th bar</Text></ListItem>
                                            <ListItem><Text>19th bar</Text></ListItem>
                                            <ListItem><Text>18th bar</Text></ListItem>
                                            <ListItem><Text>17th bar</Text></ListItem>
                                            <ListItem><Text>16th bar</Text></ListItem>
                                            <ListItem><Text>15th bar</Text></ListItem>
                                            <ListItem><Text>14th bar</Text></ListItem>
                                            <ListItem><Text>13th bar</Text></ListItem>
                                            <ListItem><Text>12th bar</Text></ListItem>
                                            <ListItem><Text>11th bar</Text></ListItem>
                                            <ListItem><Text>10th bar</Text></ListItem>
                                            <ListItem><Text>9th bar</Text></ListItem>
                                            <ListItem><Text>8th bar</Text></ListItem>
                                            <ListItem><Text>7th bar</Text></ListItem>
                                            <ListItem><Text>6th bar</Text></ListItem>
                                            <ListItem><Text>5th bar</Text></ListItem>
                                            <ListItem><Text>4th bar</Text></ListItem>
                                            <ListItem><Text>3rd bar</Text></ListItem>
                                            <ListItem><Text>2nd bar</Text></ListItem>
                                            <ListItem><Text>1st bar</Text></ListItem>
                                        </List>
                                    </ScrollView>  
                </Content>
                <Footer>
                        <FooterTab style={styles.footer}>
                            <Button  onPress={() => navigation.navigate("HomePage")}>
                                <Icon style={styles.footerIcon} name="home" />
                                <Text style={styles.footerText}>Home</Text>
                            </Button>
                            <Button onPress={() => navigation.navigate("FriendList")}>
                                <Icon style={styles.footerIcon} name="people" />
                                <Text style={styles.footerText}>Friends</Text>
                            </Button>
                            <Button onPress={() => navigation.navigate("Review")}>
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
          justifyContent: 'center'
        },
        header: {
            backgroundColor: '#FFC229'
        },
        headingText: {
            backgroundColor: '#f2d4ff',
            fontSize: 24
        },
        scrollView: {
            
            height: 150
        },

        footer: {
            backgroundColor: '#FFC229'
        },
        footerText: {
            fontSize: 9,
            color: 'black'
        },
        footerIcon: {
            color: 'black'
        }
        
      });

export default ProfilePage;