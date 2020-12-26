import { StackNavigationProp } from '@react-navigation/stack';
import { Container, Content, Header, Text, List, Icon, Button, Footer, FooterTab } from 'native-base';
import React, {useEffect} from 'react';
import { AppScreens, AuthStackParamList } from '../AuthFlowScreen';
import { getData } from '../Database';
import * as Font from "expo-font";
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';


type ReviewPageNavigationProps = StackNavigationProp<AuthStackParamList,AppScreens.ReviewPage>
export type ReviewPageParams = {
    navigation: ReviewPageNavigationProps
}

interface ReviewPageScreenProps {
    route: {params: ReviewPageParams}
    navigation: ReviewPageNavigationProps
}
    const ReviewPage: React.FunctionComponent<ReviewPageScreenProps> = (props) => {
        const {navigation, route} = props;
        const [currentUser, setCurrentUser] = React.useState("");
        const [reviewList, setReviewList] = React.useState("");
        const [userList, setUserList] = React.useState("");
        const [barList, setBarList] = React.useState("");
        const [barToReview, setBarToReview] = React.useState("");
        const [isLoaded, setLoaded] = React.useState(false);

        useEffect(() => {
            getData("current").then(response => {
                if(response === "")
                {
                    navigation.navigate("Login");
                    return;
                }
                setCurrentUser(response);

                getData("barId").then((repsonse5) => {
                    setBarToReview(repsonse5);   
                    getData("reviewList").then((repsonse3) => {
                        setReviewList(repsonse3)
                        getData("users").then((response2) => {
                            setUserList(response2);
                            getData("barList").then((repsonse4) => {
                                setBarList(repsonse4);
                            })   
                        })
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
        });

        /*const GetCurrentUser = () => {
            return JSON.parse(currentUser);
        }*/

        const GetReviewer = (checkUserID: number) => {
            let result =  JSON.parse(userList).filter((friend: 
            { id: any, Username: any, Password: any, Date: any, Firstname: any, Lastname: any, Age: any, ProfilePic: any, Bars: any, Friends: any}) => friend.id === checkUserID)
            .map((friend: { id: any, Username: any, Password: any, Date: any, Firstname: any, Lastname: any, Age: any, ProfilePic: any, Bars: any, Friends: any}) => {
                return {
                    id: friend.id,
                    Firstname: friend.Firstname,
                    Lastname: friend.Lastname,
                    Age: friend.Age
                }
            });
        return result[0];
        };

        const GetBar = (checkBarID: number) => {
            let result =  JSON.parse(barList).filter((bar: {id: any; Name: String; Location: any;}) => bar.id === checkBarID)
            .map((bar: {id: any; Name: any; Location: any}) => {
                return {
                    id: bar.id,
                    Name: bar.Name,
                    Location: bar.Location
                }
            });
        return result[0];
        }; 

        const GetReviewList = () => {
            return JSON.parse(reviewList).filter((review: {id: any; Review: String; Reviewer: any, Bar: any;}) => review.Bar === GetBar(Number(barToReview)).id)
            .map((review: {id: any; Review: any; Reviewer: any, Bar: any}) => {
                return {
                    id: review.id,
                    Review: review.Review,
                    Reviewer: GetReviewer(review.Reviewer),
                    Bar: GetBar(review.Bar)
                }
            });
        }

        if(isLoaded)
        {
        return (
            <Container>
            {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}> */}
                <Header searchBar rounded style={styles.header}>
                </Header>
                <Content style={styles.content}>
                    <View style={styles.allTheBars}>
                        
                        <ScrollView style={styles.scrollView}>
                            <Avatar source={{uri:GetBar(Number(barToReview)).avatar_url}} />
                            <Text style={styles.headingText}>{GetBar(Number(barToReview)).Name}</Text>
                            <Text>{GetBar(Number(barToReview)).Location} </Text>
                            <List>
                                {GetReviewList().map((review: {id: any; Review: any; Reviewer: any, Bar: any}) => {
                                    return (
                                        <ListItem key={review.id} bottomDivider style={styles.bottomDeviderList}>
                                            <ListItem.Title>{review.Review + ' by ' + review.Reviewer.Firstname + ' '}
                                            </ListItem.Title>
                                            <ListItem.Subtitle>{review.Bar.id}</ListItem.Subtitle>
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
            height: 350,
            
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
    

export default ReviewPage;