import AsyncStorage from "@react-native-async-storage/async-storage";

let friendList = [
    {
        id: 1,
        Firstname: 'Ben',
        Lastname: 'Vandermeeren',
        Age: 21
    },
    {
        id: 2,
        Firstname: "Auriams",
        Lastname: 'Arlauskas',
        Age: 21
    },
    {
        id: 3,
        Firstname: 'Phloy',
        Lastname: 'Vanderwyngeart',
        Age: 21
    },
    {
        id: 4,
        Firstname: 'Nand',
        Lastname: 'van Dongen',
        Age: 21
    },
    {
        id: 5,
        Firstname: 'Jef',
        Lastname: 'Lemmens',
        Age: 21
    },
    {
        id: 6,
        Firstname: 'Natan',
        Lastname: 'Vermeersch',
        Age: 21
    },
    {
        id: 7,
        Firstname: "Sofie",
        Lastname: 'Evers',
        Age: 21
    },
    {
        id: 8,
        Firstname: "Giel",
        Lastname: 'Lenearts',
        Age: 21
    }
];

let barList = [
    {
        id: 1,
        Name: "Blokhut",
        Location: "oude markt, 3000 Leuven",
        avatar_url: "https://i.ibb.co/VJ8PyNK/Blokhut.png",
    },
    {
        id: 2,
        Name: "Vesper",
        Location: "oude markt, 3000 Leuven",
        avatar_url: "https://i.ibb.co/4gcfTgR/Vesper.png",

    },
    {
        id: 3,
        Name: "Alegria",
        Location: "oude markt, 3000 Leuven",
        avatar_url: "https://i.ibb.co/VLG7QSW/Alegria.png"
    },
    {
        id: 4,
        Name: "Villa artois",
        Location: "oude markt, 3000 Leuven",
        avatar_url: "https://i.ibb.co/qFZcryg/Villa-artois.jpg"
    },
    {
        id: 5,
        Name: "'t archief",
        Location: "oude markt, 3000 Leuven",
        avatar_url: "https://i.ibb.co/X8gbK3v/t-archief.jpg"
    },
    {
        id: 6,
        Name: "Café Manger",
        Location: "oude markt, 3000 Leuven",
        avatar_url: "https://i.ibb.co/j8DH0XR/Caf-manger.png"
    },
    {
        id: 7,
        Name: "De Giraf",
        Location: "oude markt, 3000 Leuven",
        avatar_url: "https://i.ibb.co/hfwbDrL/De-Giraf.jpg"
    }
];

let userList = [
    {
        Username: "Admin",
        Password: "password",
        Date: "2020-09-10",
        Firstname: "Admin's name",
        ProfilePic: "https://i.ibb.co/z7xPnft/Peter.png", //test
        Bars: 
        [
            {
                id: 2,
                Name: "Vesper",
                Location: "oude markt, 3000 Leuven",
                avatar_url: "https://i.ibb.co/4gcfTgR/Vesper.png",
                Ranked: "3"
        
            },
            {
                id: 7,
                Name: "De Giraf",
                Location: "oude markt, 3000 Leuven",
                avatar_url: "https://i.ibb.co/hfwbDrL/De-Giraf.jpg",
                Ranked: "4"
            },
            {
                id: 5,
                Name: "'t archief",
                Location: "oude markt, 3000 Leuven",
                avatar_url: "https://i.ibb.co/X8gbK3v/t-archief.jpg",
                Ranked: "5"
            },
            {
                id: 4,
                Name: "Villa artois",
                Location: "oude markt, 3000 Leuven",
                avatar_url: "https://i.ibb.co/qFZcryg/Villa-artois.jpg",
                Ranked: "1"
            },
            {
                id: 3,
                Name: "Alegria",
                Location: "oude markt, 3000 Leuven",
                avatar_url: "https://i.ibb.co/VLG7QSW/Alegria.png",
                Ranked: "2"
            },
            {
                id: 1,
                Name: "Blokhut",
                Location: "oude markt, 3000 Leuven",
                avatar_url: "https://i.ibb.co/VJ8PyNK/Blokhut.png",
                Ranked: "5"
            }
        ]
    }
    
];

export const initialise = async () => {
    AsyncStorage.clear().then(() => {
        AsyncStorage.setItem("friendList", JSON.stringify(friendList)).then(() => {
            AsyncStorage.setItem("users", JSON.stringify(userList)).then(() => {
                
                AsyncStorage.setItem("barList", JSON.stringify(barList));
            });
        });
    })
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