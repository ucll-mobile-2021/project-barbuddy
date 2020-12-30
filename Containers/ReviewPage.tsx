import { StackNavigationProp } from '@react-navigation/stack';
import { Container, Content, Text, List, Icon, Button, Footer, FooterTab, Toast } from 'native-base';
import React, { useEffect } from 'react';
import { AppScreens, AuthStackParamList } from '../AuthFlowScreen';
import { getData, storeData } from '../Database';
import * as Font from "expo-font";
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { Linking, StyleSheet, View, Image } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import QRCode from 'react-native-qrcode-svg';


type ReviewPageNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.ReviewPage>
export type ReviewPageParams = {
    navigation: ReviewPageNavigationProps
}

interface ReviewPageScreenProps {
    route: { params: ReviewPageParams }
    navigation: ReviewPageNavigationProps
}
const ReviewPage: React.FunctionComponent<ReviewPageScreenProps> = (props) => {
    const { navigation, route } = props;
    const [currentUser, setCurrentUser] = React.useState("");
    const [reviewList, setReviewList] = React.useState("");
    const [userList, setUserList] = React.useState("");
    const [barList, setBarList] = React.useState("");
    const [barToReview, setBarToReview] = React.useState("");
    const [isLoaded, setLoaded] = React.useState(false);

    useEffect(() => {
        getData("current").then(response => {
            if (response === "") {
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
                            const LoadFonts = async () => {
                                await Font.loadAsync({
                                    'Roboto': require('native-base/Fonts/Roboto.ttf'),
                                    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
                                    ...Ionicons.font,
                                });
                            }
                            LoadFonts().then(() => setLoaded(true));
                        })
                    })
                });
            });
        });
    });

    const GetCurrentUser = () => {
        return JSON.parse(currentUser);
    }

    const Logout = () => {
        storeData("current", JSON.stringify("")).then(() => {
            navigation.navigate("Login");
        });

    }

    const GetQRCodeValue = () => {
        let qr = {
            type: "bar",
            id: Number(barToReview)
        };
        return JSON.stringify(qr);
    }

    const GetReviewer = (checkUserID: number) => {
        let result = JSON.parse(userList).find((friend: any) => friend.id === checkUserID);
        return result;
    };

    const GetBar = (checkBarID: number) => {
        let result = JSON.parse(barList).find((bar: any) => bar.id === checkBarID);
        return result;
    };

    const GetReviewList = () => {
        return JSON.parse(reviewList).filter((review: { id: any; Review: String; Score: Number, Reviewer: any, Bar: any, avatar_url: any }) => review.Bar === GetBar(Number(barToReview)).id).map((review: { id: any; Review: any; Score: Number, Reviewer: any, Bar: any }) => {
            return {
                id: review.id,
                Review: review.Review,
                Score: review.Score,
                Reviewer: GetReviewer(review.Reviewer),
                Bar: GetBar(review.Bar),
                avatar_url: GetReviewer(review.Reviewer.avatar_url)
            }
        });
    }

    if (isLoaded) {
        return (
            <Container>
                {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}> */}
                <Content style={styles.content}>
                    <View style={styles.headerContent}>
                        <Image style={styles.avatar} source={{ uri: GetBar(Number(barToReview)).avatar_url }} />
                        <Text style={styles.nameUser}>{GetBar(Number(barToReview)).Name}</Text>
                        <Text style={styles.headingText}>{GetBar(Number(barToReview)).Location} </Text>
                        <Button style={styles.linkButton} onPress={() => {
                            let url = GetBar(Number(barToReview)).Url;
                            if (url === "" || url === undefined || url === null) {
                                Toast.show({
                                    text: "The bar menu is not available",
                                    type: "danger"
                                });
                            }
                            else {
                                Linking.openURL(url);
                            }
                        }}><Text style={styles.text}>Menu</Text></Button>
                    </View>
                    <View style={styles.allTheBars}>
                        <View style={styles.qrView}>
                            <View style={styles.qr}>
                                <QRCode value={GetQRCodeValue()} size={200} />
                            </View>
                        </View>
                        <ScrollView style={styles.scrollView}>
                            {GetReviewList().length !== 0 ?
                                <List>
                                    {GetReviewList().map((review: { id: any; Review: any, Score: Number, Reviewer: any, Bar: any, avatar_url: any }) => {
                                        return (
                                            <ListItem key={review.id} bottomDivider style={styles.bottomDeviderList}>
                                                <Avatar source={{ uri: review.avatar_url }} />
                                                <ListItem.Content>
                                                    <ListItem.Title>{review.Review}</ListItem.Title>
                                                    <ListItem.Subtitle>{"Score: " + review.Score}</ListItem.Subtitle>
                                                    <ListItem.Subtitle>{'By ' + review.Reviewer.Firstname}</ListItem.Subtitle>
                                                    <ListItem.Subtitle></ListItem.Subtitle>
                                                </ListItem.Content>

                                            </ListItem>
                                        );
                                    })}
                                </List> : null}
                            {GetReviewList().length === 0 ?
                                <Text style={styles.headingText}>There are no reviews for this bar yet.</Text> : null}
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
                        <Button onPress={() => Logout()}>
                            <Icon style={styles.footerIcon} name="exit" />
                            <Text style={styles.footerText}>Logout</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }

    else {
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    content: {

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
        backgroundColor: '#1f1f1f',

    },
    linkButton: {
        alignSelf: "center",
        alignItems: "center",
        width: "25%",
        backgroundColor: "#FFC229", //yellow 
        borderRadius: 5,
    },
    headerContent: {
        padding: 30,
        alignItems: 'center',

    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "#FFC229", //yellow
        marginBottom: 10,
    },
    nameUser: {
        fontSize: 45,
        color: '#FFC229', //yellow
        fontWeight: '600',

    },
    headingText: { // 'all the bars youve logd into'
        color: '#FFC229',
        //backgroundColor: '#1a1a1a',
        backgroundColor: '#1f1f1f', //darkgray 
        fontSize: 20,
        fontWeight: 'normal',
        padding: 15,
        //paddingHorizontal:20
    },
    topBars: {
        opacity: 0.95

    },
    allTheBars: {
        opacity: 0.95
    },
    qrView: {
        backgroundColor: '#FFC229'
    },
    qr: {
        alignItems: "center",
        padding: 10
    },
    scrollView: {
        height: 415,

    },
    bottomDeviderList: {
        paddingVertical: 2,
        borderColor: '#FFC229', // yellow
        borderWidth: 1,

    },
    text: {
        color: "black",
        alignSelf: "center"
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