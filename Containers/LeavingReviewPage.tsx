import { StackNavigationProp } from '@react-navigation/stack';
import { Container, Content, Header, Text, Icon, Button, Footer, FooterTab, Form, Input, Item, Toast } from 'native-base';
import React, { useEffect } from 'react';
import { AppScreens, AuthStackParamList } from '../AuthFlowScreen';
import { getData, storeData } from '../Database';
import * as Font from "expo-font";
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import { AirbnbRating, Rating } from 'react-native-ratings';

type LeavingReviewPageNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.LeavingReviewPage>
export type LeavingReviewPageParams = {
    navigation: LeavingReviewPageNavigationProps
}

interface LeavingReviewPageScreenProps {
    route: { params: LeavingReviewPageParams }
    navigation: LeavingReviewPageNavigationProps
}
const LeavingReviewPage: React.FunctionComponent<LeavingReviewPageScreenProps> = (props) => {
    const { navigation, route } = props;
    const [currentUser, setCurrentUser] = React.useState("");
    const [barToReview, setBarToReview] = React.useState("");
    const [review, setReview] = React.useState("");
    const [selectedValue, setSelectedValue] = React.useState(5);
    const [isLoaded, setLoaded] = React.useState(false);

    useEffect(() => {
        getData("current").then(response => {
            if (response === "") {
                navigation.navigate("Login");
                return;
            }
            setCurrentUser(response);

            getData("barToReview").then((repsonse5) => {
                setBarToReview(repsonse5);
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

    const GetCurrentUser = () => {
        return JSON.parse(currentUser);
    }

    const Logout = () => {
        storeData("current", JSON.stringify("")).then(() => {
            navigation.navigate("Login");
        });

    }

    const AddReview = (reviewLeft: any, scoreLeft: any) => {
        if (reviewLeft === "" || Number(scoreLeft < 1) || Number(scoreLeft > 5)) {
            Toast.show({
                text: "Please provide text to the review",
                type: "warning"
            })
        }
        else {
            getData("reviewList").then(reviews => {
                let AllReviews;
                if (reviews === "") {
                    AllReviews = [];
                }
                else {
                    AllReviews = JSON.parse(reviews);
                }
                let id = AllReviews[AllReviews.length - 1].id + 1;
                let result = {
                    id: id,
                    Review: reviewLeft,
                    Score: Number(scoreLeft),
                    Reviewer: GetCurrentUser().id,
                    Bar: Number(barToReview)
                };
                AllReviews.push(result);
                storeData("reviewList", JSON.stringify(AllReviews)).then(() => navigation.navigate("HomePage"));
                console.log("Review succesfully!");
                console.log("review:" + JSON.stringify(result));
                console.log("all reviews: " + JSON.stringify(AllReviews));
            });
        }
    }


    if (isLoaded) {
        return (
            <Container>
                {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}> */}
                <Header searchBar rounded style={styles.header}>
                    <Text style={styles.nameUser}>Review</Text>
                </Header>
                <Content style={styles.content}>
                    <View style={styles.allTheBars}>
                        <Form>
                            <View>
                                <AirbnbRating
                                    count={5}
                                    defaultRating={5}
                                    onFinishRating={value => setSelectedValue(value)} />
                            </View>
                            <View style={styles.InputView}>
                                <Item rounded style={styles.Input} >
                                    <Input style={styles.InputText} placeholder="Review" onChangeText={e => setReview(e)} />
                                </Item>
                            </View>
                        </Form>
                        <Button full rounded success style={{ width: "80%", alignSelf: "center" }} onPress={() =>
                            AddReview(review, selectedValue)}><Text>Leave Review</Text></Button>
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
    scrollView: {
        height: 415,

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
    },
    InputView: {
        justifyContent: "center",
        alignItems: "center"
    },
    Input: {
        margin: 20,
        width: "80%",
        marginTop: 10,
        color: '#FFC229'
    },
    InputText: {
        color: '#FFC229'
    }
});


export default LeavingReviewPage;