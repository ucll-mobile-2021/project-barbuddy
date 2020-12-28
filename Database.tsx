import AsyncStorage from "@react-native-async-storage/async-storage";

let reviewList = [
    {
        id: 1,
        Review: "Nice bar, lots of drinks",
        Score: 4,
        Reviewer: 1,
        Bar: 1
    },
    {
        id: 2,
        Review: "Cool bar, lots of falshy drinks",
        Score: 4,
        Reviewer: 2,
        Bar: 1
    },
    {
        id: 3,
        Review: "Epic bar, the best drinks",
        Score: 5,
        Reviewer: 5,
        Bar: 1
    },
    {
        id: 4,
        Review: "Shit bar, the worst service",
        Score: 1,
        Reviewer: 1,
        Bar: 2
    }
]

let barList = [
    {
        id: 1,
        Name: "Blokhut",
        Location: "Oude markt, 3000 Leuven",
        avatar_url: "https://i.ibb.co/VJ8PyNK/Blokhut.png",
        Url: "https://restaurantguru.com/Blokhut-Leuven/menu"
    },
    {
        id: 2,
        Name: "Vesper",
        Location: "Oude markt, 3000 Leuven",
        avatar_url: "https://i.ibb.co/4gcfTgR/Vesper.png",
        Url: "http://www.cafevesper.be/2016/03/29/onze-cocktails-2/"
    },
    {
        id: 3,
        Name: "Alegria",
        Location: "Oude markt, 3000 Leuven",
        avatar_url: "https://i.ibb.co/VLG7QSW/Alegria.png",
        Url: ""
    },
    {
        id: 4,
        Name: "Villa artois",
        Location: "Oude markt, 3000 Leuven",
        avatar_url: "https://i.ibb.co/qFZcryg/Villa-artois.jpg",
        Url: "https://www.facebook.com/villaartoisleuven/"
    },
    {
        id: 5,
        Name: "t archief",
        Location: "Oude markt, 3000 Leuven",
        avatar_url: "https://i.ibb.co/X8gbK3v/t-archief.jpg",
        Url: "https://www.facebook.com/tarchiefleuven/"
    },
    {
        id: 6,
        Name: "Café Manger",
        Location: "Oude markt, 3000 Leuven",
        avatar_url: "https://i.ibb.co/j8DH0XR/Caf-manger.png",
        Url: ""
    },
    {
        id: 7,
        Name: "De Giraf",
        Location: "Oude markt, 3000 Leuven",
        avatar_url: "https://i.ibb.co/hfwbDrL/De-Giraf.jpg",
        Url: "https://www.opcafegaan.be/leuven/de-giraf"
    }
];

let users = [
    {
        id: 1,
        Username: "Peter",
        Password: "Password",
        Date: "2020-09-10",
        Firstname: "Peter",
        Lastname: "Jackson",
        ProfilePic: "https://i.ibb.co/z7xPnft/Peter.png", //test
        Bars:[{id:3, Rank:"1"},
            {id:2, Rank:"2"},
            {id:1, Rank:"3"},
            {id:4, Rank:"4"},
            {id:5, Rank:"5"},
            {id:6, Rank:"6"}],
        Friends: [2,3,4,5,6],
        Visiting: 1
    },
    {
        id: 2,
        Username: "Jef",
        Password: "Pas123",
        Date: "2020-09-10",
        Firstname: "Jef",
        Lastname: "Jefferson",
        ProfilePic: "https://i.ibb.co/HPkNBPD/Alfons.png", //test
        Bars:[{id:2, Rank:"3"},
        {id:6, Rank:"5"},
        {id:5, Rank:"4"},
        {id:4, Rank:"1"},
        {id:3, Rank:"2"},
        {id:1, Rank:"6"}],
        Friends: [3,4],
        Visiting: null
    },
    {
        id: 3,
        Username: "Andrew",
        Password: "Azerty123",
        Date: "2020-09-10",
        Firstname: "Andrew",
        Lastname: "Everet",
        ProfilePic: "https://i.ibb.co/f4590tC/Joseph.png", //test
        Bars:[{id:2, Rank:"3"},
        {id:6, Rank:"5"},
        {id:5, Rank:"4"},
        {id:4, Rank:"1"},
        {id:3, Rank:"2"},
        {id:1, Rank:"6"}],
        Friends: [2,4],
        Visiting: 2
    },
    {
        id: 4,
        Username: "Lisa",
        Password: "Password123.",
        Date: "2020-09-10",
        Firstname: "Lisa",
        Lastname: "Minelli",
        ProfilePic: "https://i.ibb.co/ygBc7xc/Francine.png", //test
        Bars:[{id:2, Rank:"3"},
        {id:6, Rank:"5"},
        {id:5, Rank:"4"},
        {id:4, Rank:"1"},
        {id:3, Rank:"2"},
        {id:1, Rank:"6"}],
        Friends: [1,2],
        Visiting: null
    },
    {
        id: 5,
        Username: "Erik",
        Password: "Damann",
        Date: "2020-09-10",
        Firstname: "Erik",
        Lastname: "Cartman",
        ProfilePic: "https://i.ibb.co/JKk14dM/Mario.png", //test
        Bars:[{id:2, Rank:"3"},
        {id:6, Rank:"5"},
        {id:5, Rank:"4"},
        {id:4, Rank:"1"},
        {id:3, Rank:"2"},
        {id:1, Rank:"6"}],
        Friends: [1,6],
        Visiting: 1,
    },
    {
        id: 6,
        Username: "Nia",
        Password: "Nia",
        Date: "2020-09-10",
        Firstname: "Nia",
        Lastname: "Naal",
        ProfilePic: "https://i.ibb.co/7kMgXf1/Corporate-Christmas-Party-Vector-Smiling-Drunk-Man-And-Woman-Relaxing-Celebrating-Winter-Concept-End.jpg", //test
        Bars:[{id:2, Rank:"3"},
        {id:6, Rank:"5"},
        {id:5, Rank:"4"},
        {id:4, Rank:"1"},
        {id:3, Rank:"2"},
        {id:1, Rank:"6"}],
        Friends: [2,7],
        Visiting: 6
    },
    {
        id: 7,
        Username: "Jessica",
        Password: "Rabbit",
        Date: "2020-09-10",
        Firstname: "Jessica",
        Lastname: "Cruz",
        ProfilePic: "https://i.ibb.co/LnNGNy6/Jessica.jpg", //test
        Bars:[],
        Friends: [],
        Visiting: null
    }
    
];

export const initialise = async () => {
    AsyncStorage.clear().then(() => {
        //AsyncStorage.setItem("friendList", JSON.stringify(friendList)).then(() => {
            AsyncStorage.setItem("users", JSON.stringify(users)).then(() => {
                AsyncStorage.setItem("barList", JSON.stringify(barList));
                AsyncStorage.setItem("reviewList", JSON.stringify(reviewList));
            });
        });
    //})
}

export const storeData = async (key: string, value: string) => {
    let result;
    try {
        let result = AsyncStorage.setItem(key, value);
    }
    catch (e) {
        console.log("Error on saving data");
    }
    return await result;
}

export const getData = async (key: string) => {
    let result = "";
    await AsyncStorage.getItem(key).then(temp => {
        if (temp !== null) {
            result = temp;
            return result;
        }
    });
    return result;
}