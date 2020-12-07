import AsyncStorage from "@react-native-async-storage/async-storage";

let friendList = [
    {Firstname:'Ben',
    Lastname: 'Vandermeeren',
    Age: 21},
    {Firstname:"Auriams",
    Lastname: 'Arlauskas',
    Age: 21},
    {Firstname:'Phloy',
    Lastname: 'Vanderwyngeart',
    Age: 21},
    {Firstname:'Nand',
    Lastname: 'van Dongen',
    Age: 21},
    {Firstname:'Jef',
    Lastname: 'Lemmens',
    Age: 21},
    {Firstname:'Natan',
    Lastname: 'Vermeersch',
    Age: 21},
    {Firstname:"Sofie",
    Lastname: 'Evers',
    Age: 21},
    {Firstname:"Giel",
    Lastname: 'Lenearts',
    Age: 21}
];

let barList = [
    {
        id: 1,
        Name: "blokhut",
        Location: "oude markt, 3000 Leuven",
    },
    {
        id: 2,
        Name: "Vesper",
        Location: "oude markt, 3000 Leuven",
    },
    {
        id: 1,
        Name: "Alegria",
        Location: "oude markt, 3000 Leuven",
    },
    {
        id: 1,
        Name: "Villa artois",
        Location: "oude markt, 3000 Leuven",
    },
    {
        id: 1,
        Name: "'t archief",
        Location: "oude markt, 3000 Leuven",
    },
    {
        id: 1,
        Name: "Café Manger",
        Location: "oude markt, 3000 Leuven",
    },
    {
        id: 1,
        Name: "De Giraf",
        Location: "oude markt, 3000 Leuven",
    },
];

let userList = [
    {
        Username: "Admin",
        Password: "password",
        Date: "2020-09-10",
        Firstname: "Admin's name"
    }
];

export const initialise = async () => {
    AsyncStorage.clear().then(() => {
        AsyncStorage.setItem("friendList",JSON.stringify(friendList)).then(() => {
            AsyncStorage.setItem("users",JSON.stringify(userList)).then(() => {
                AsyncStorage.setItem("barList",JSON.stringify(barList));
            });
        });
    })
}

export const storeData = async (key: string, value: string) => {
    let result;
    try {
        let result = AsyncStorage.setItem(key,value);
    }
    catch (e) {
        console.log("Error on saving data");
    }
    return await result;
}

export const getData = async(key: string) => {
    let result = "";
    await AsyncStorage.getItem(key).then(temp => {
        if(temp !== null)
        {
            result = temp;
            return result;
        }
    });
    return result;
}