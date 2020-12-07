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
        Name: "blokhut",
        Location: "oude markt, 3000 Leuven",
    },
    {
        id: 2,
        Name: "Vesper",
        Location: "oude markt, 3000 Leuven",
    },
    {
        id: 3,
        Name: "Alegria",
        Location: "oude markt, 3000 Leuven",
    },
    {
        id: 4,
        Name: "Villa artois",
        Location: "oude markt, 3000 Leuven",
    },
    {
        id: 5,
        Name: "'t archief",
        Location: "oude markt, 3000 Leuven",
    },
    {
        id: 6,
        Name: "Café Manger",
        Location: "oude markt, 3000 Leuven",
    },
    {
        id: 7,
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