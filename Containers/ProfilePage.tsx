import { StyleSheet, View, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Container, Content, Header, Text, Item, List, Input, Icon, Button,  Footer, FooterTab } from 'native-base';
import React from 'react';
import { AppScreens, AuthStackParamList } from '../AuthFlowScreen';
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
            name: 'Bar M',
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
               

            {/* <Text style={styles.headingText}>Your top 3 bars</Text>

            <List>
                <ListItem.Content>
                    <ListItem.Title ><Text>nr 1 favo bar</Text></ListItem.Title>
                    
                </ListItem.Content>

                <ListItem><Text>nr 2 favo bar</Text></ListItem>
                <ListItem><Text>nr 3 favo bar</Text></ListItem>
            </List> */}

                </View>             
                        
                

            <View style={styles.allTheBars}>
            <Text style={styles.headingText}>All the bars you've loged into</Text>
            <ScrollView style={styles.scrollView}>
                {
                        list.map((l, i) => (
                            <ListItem key={i} bottomDivider style={styles.bottomDeviderList}>
                                
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