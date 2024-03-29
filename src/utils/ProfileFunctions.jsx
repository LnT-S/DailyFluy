import AsyncStorage from "@react-native-async-storage/async-storage";
import fs, { writeFile } from 'react-native-fs'
import { convertUriToBase64 } from "./UtilityFuntions";

const saveAvatar = async (avatar) => {
    try {
        await AsyncStorage.setItem('avatar', avatar);
    } catch (error) {
        console.error('ASYNC STORAGE ERROR', error);
    }
}
const getAvatar = async () => {
    try {
        let avatar = await AsyncStorage.getItem('avatar');
        return avatar
    } catch (error) {
        console.error('ASYNC STORAGE ERROR', error);
    }
}
const saveName = async (name) => {
    try {
        await AsyncStorage.setItem('name', name);
    } catch (error) {
        console.error('ASYNC STORAGE ERROR', error);
    }
}
const getName = async () => {
    try {
        let name = await AsyncStorage.getItem('name');
        return name
    } catch (error) {
        console.error('ASYNC STORAGE ERROR', error);
    }
}
const savePhone = async (phone) => {
    try {
        await AsyncStorage.setItem('phone', phone);
    } catch (error) {
        console.error('ASYNC STORAGE ERROR', error);
    }
}
const getPhone = async () => {
    try {
        let phone = await AsyncStorage.getItem('phone');
        return phone
    } catch (error) {
        console.error('ASYNC STORAGE ERROR', error);
    }
}
const saveEmail = async (email) => {
    try {
        await AsyncStorage.setItem('email', email);
    } catch (error) {
        console.error('ASYNC STORAGE ERROR', error);
    }
}
const getEmail = async () => {
    try {
        let email = await AsyncStorage.getItem('email');
        return email
    } catch (error) {
        console.error('ASYNC STORAGE ERROR', error);
    }
}
const storeArrayData = async (arrName, array) => {
    try {
        await AsyncStorage.setItem(arrName, JSON.stringify(array));
        console.log('SAVED ARRAY STORED SUCCESSFULLY');
    } catch (error) {
        console.error('Error storing data:', error);
    }
};
const saveSavedStatus = async (uri) => {
    try {
        const base64Image = await convertUriToBase64(uri);
        const path = `${fs.DownloadDirectoryPath}/${new Date().getTime()}.jpg`;
        await writeFile(path, base64Image);
        const jsonValue = await AsyncStorage.getItem('savedUriArray');
        let savedStatusArray = jsonValue != null ? JSON.parse(jsonValue) : null;
        if (savedStatusArray === null) {
            savedStatusArray = [];
        }
        const modifiedArray = [path, ...savedStatusArray]
        await storeArrayData('savedUriArray', modifiedArray)
    } catch (error) {
        console.error('ASYNC STORAGE ERROR', error);
    }
}
const getSavedStatus = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('savedUriArray');
        let data = (jsonValue != null) ? JSON.parse(jsonValue) : null;
        console.log(data)
        return data
    } catch (error) {
        console.error('ERROR READING SAVED URI ARRAY FROM ASYNC STORAGE', error);
    }
}
const deleteOneStatus = async (index) => {
    try {
        const imageArray = await getSavedStatus('savedUriArray');
        if (imageArray) {
            const modifiedArray = imageArray.filter(async (e, i) => {
                if (i !== index) {
                    return true
                }else{
                    console.log(e);
                    fs.unlink(e).then(info=>{
                        console.log("PATH AND FILE REMOVED ",info);
                        return false
                    })
                    .catch(err=>{
                        console.log("ERRROR DELETING FILE FROM RNFS " ,err)
                    })
                    
                }
            });
            await storeArrayData('savedUriArray', modifiedArray);
            console.log('IMAGE REMOVED FROM SAVED STATUS');
        } else {
            console.log('NO SUCH IMAGE TO DELETE');
        }
    } catch (error) {
        console.error('Error deleting image from array:', error);
    }
};

export {
    getAvatar,
    saveAvatar,
    savePhone,
    getPhone,
    getEmail,
    saveEmail,
    getName,
    saveName,
    deleteOneStatus,
    getSavedStatus,
    saveSavedStatus
}