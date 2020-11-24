import AsyncStorage from "@react-native-async-storage/async-storage";

let friendList = [
    "Friend 1",
    "Friend 2",
    "Friend 3",
    "Friend 4",
    "Friend 5",
    "Friend 6",
    "Friend 7",
    "Friend 8"
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
            AsyncStorage.setItem("users",JSON.stringify(userList));
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