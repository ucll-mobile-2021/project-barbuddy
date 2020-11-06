import { StyleSheet, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Container, Content, Header, Text, Item, List, Input, Icon, Button, Image, Footer, FooterTab } from 'native-base';
import React from 'react';
import { AppScreens, AuthStackParamList } from '../AuthFlowScreen';
import { ScrollView } from 'react-native-gesture-handler';
import { ListItem, Avatar } from 'react-native-elements';

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
    const list = [
        { 
            name: 'A bar', 
            avatar_url:'https://i.ibb.co/LgqWFsw/Bar.png'
            /*subtitle: '' */
        },
        {
            name: 'Bar A',
            avatar_url: 'https://i.ibb.co/KGKwRFQ/BarA.png'
            /*subtitle: 'Vice Chairman'*/
        },
        {
            name: 'Bar B',
            avatar_url:'https://i.ibb.co/XtVHGR3/BarB.png'
            /*subtitle: 'Vice Chairman'*/
        },
        {
            name: 'Bar C',
            avatar_url: 'https://i.ibb.co/6sFdc6j/BarC.png'
            /*subtitle: 'Vice Chairman'*/
        },
        {
            name: 'Bar D',
            avatar_url: 'https://i.ibb.co/5GHK2vL/BarD.png'
            /*subtitle: 'Vice Chairman'*/
        },
        {
            name: 'Bar E',
            avatar_url: 'https://i.ibb.co/qk2XKzd/BarE.png'
            /*subtitle: 'Vice Chairman'*/
        },
        {
            name: 'Bar F',
            avatar_url: 'https://i.ibb.co/bLP0NZ5/BarF.png'
            /*subtitle: 'Vice Chairman'*/
        },
        {
            name: 'Bar G',
            avatar_url: 'https://i.ibb.co/rcz2Nzp/BarG.png'
            /*subtitle: 'Vice Chairman'*/
        },
        {
            name: 'Bar H',
            avatar_url: 'https://i.ibb.co/M23Gwcf/BarH.png'
            /*subtitle: 'Vice Chairman'*/
        },
        {
            name: 'Bar I',
            avatar_url: 'https://i.ibb.co/mXg1bGs/BarI.png'
            /*subtitle: 'Vice Chairman'*/
        },
        {
            name: 'Bar J',
            avatar_url: 'https://i.ibb.co/HTGgRNG/BarJ.png'
            /*subtitle: 'Vice Chairman'*/
        },
        {
            name: 'Bar K',
            avatar_url: 'https://i.ibb.co/rwTp8CT/BarK.png'
            /*subtitle: 'Vice Chairman'*/
        },
        {
            name: 'Bar L',
            avatar_url: 'https://i.ibb.co/wY0GvnC/BarL.png'
            /*subtitle: 'Vice Chairman'*/
        },
        {
            name: 'Bar K',
            avatar_url: 'https://i.ibb.co/mFPdFvL/BarM.png'
            /*subtitle: 'Vice Chairman'*/
        },
        {
            name: 'Bar N',
            avatar_url: 'https://i.ibb.co/585SMY2/BarN.png'
            /*subtitle: 'Vice Chairman'*/
        },
        {
            name: 'Bar O',
            avatar_url: 'https://i.ibb.co/D4KtD4g/BarO.png'
            /*subtitle: 'Vice Chairman'*/
        },
        {
            name: 'Bar P',
            avatar_url: 'https://i.ibb.co/8d79hc4/BarP.png'
            /*subtitle: 'Vice Chairman'*/
        },
        {
            name: 'Bar Q',
            avatar_url: 'https://i.ibb.co/Dk3mgdY/BarQ.png'
            /*subtitle: 'Vice Chairman'*/
        },
        {
            name: 'Bar R',
            avatar_url: 'https://i.ibb.co/m6JrmYL/BarR.png'
            /*subtitle: 'Vice Chairman'*/
        },
        {
            name: 'Bar S',
            avatar_url: 'https://i.ibb.co/0c1j14w/BarS.png'
            /*subtitle: 'Vice Chairman'*/
        },
        {
            name: 'Bar T',
            avatar_url: 'https://i.ibb.co/nsM5zTT/BarT.png'
            /*subtitle: 'Vice Chairman'*/
        },
        {
            name: 'Bar U',
            avatar_url: 'https://i.ibb.co/VH8D40y/BarU.png'
            /*subtitle: 'Vice Chairman'*/
        }
    ]

    return (
        <Container>

            <Content>

                <Text style={styles.headingText}>Personal info</Text>

                <Text>This is my personal info Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tempora, est non atque quia rerum quibusdam ut, nobis, recusandae vel voluptatem amet illum praesentium quos impedit odio ipsam. Possimus, velit?</Text>


               
                        <List style={styles.list}>
                        
                    
                            <ListItem style={styles.listItem}> 
                                <Avatar source={{uri: 'https://i.ibb.co/D4KtD4g/BarO.png'}} />
                                <ListItem.Content>
                                    <ListItem.Title>{'Favorite bar'}</ListItem.Title>
                                    <ListItem.Subtitle>{'Bar O'}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>

                            <ListItem style={styles.listItem}> 
                                <Avatar source={{uri: 'https://i.ibb.co/wY0GvnC/BarL.png'}} />
                                <ListItem.Content>
                                    <ListItem.Title>{'Second favorite bar'}</ListItem.Title>
                                    <ListItem.Subtitle>{'Bar L'}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>

                            <ListItem style={styles.listItem}> 
                                <Avatar source={{uri: 'https://i.ibb.co/rcz2Nzp/BarG.png'}} />
                                <ListItem.Content>
                                    <ListItem.Title>{'Third favorite bar'}</ListItem.Title>
                                    <ListItem.Subtitle>{'Bar G'}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        </List>
                   

                {/* <Text style={styles.headingText}>Your top 3 bars</Text>

                <List>
                    <ListItem.Content>
                        <ListItem.Title ><Text>nr 1 favo bar</Text></ListItem.Title>
                        
                    </ListItem.Content>

                    <ListItem><Text>nr 2 favo bar</Text></ListItem>
                    <ListItem><Text>nr 3 favo bar</Text></ListItem>
                </List> */}

                <Text style={styles.headingText}>All the bars you've loged into</Text>

                <ScrollView style={styles.scrollView}>
                {
                        list.map((l, i) => (
                            <ListItem key={i} bottomDivider style={styles.list}>
                                
                                <Avatar source={{uri: l.avatar_url}} />
                                <ListItem.Content>
                                    <ListItem.Title>{l.name}</ListItem.Title>
                                   {/* <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle> */}
                                </ListItem.Content>
                            </ListItem>
                        ))
                    }
                    {/* <List>
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
                    </List> */}
                </ScrollView>
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
    list: {
        // height: 350
    },
    listItem: {
        //height: 100
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