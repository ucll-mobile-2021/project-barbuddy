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

let barList = [
    "Bar 1",
    "Bar 2",
    "Bar 3",
    "Bar 4",
    "Bar 5",
    "Bar 6",
    "Bar 7",
    "Bar 8"
];




export const initialise = async () => {
    AsyncStorage.setItem("friendList",JSON.stringify(friendList));
    AsyncStorage.setItem("barList",JSON.stringify(barList));
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