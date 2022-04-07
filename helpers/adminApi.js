import * as SecureStore from 'expo-secure-store';
import { concat } from 'react-native-reanimated';
import { retrySymbolicateLogNow } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import { API_URL } from "../config.json";
import {initiateSocketConnection} from "../context/socket";
import * as Notifications from "expo-notifications";
import * as Device from 'expo-device';
const localStorage = require("./localStorage");

module.exports = {
    //this funtion returns true if the user is valid else false
    //the funtion also adds the token to secure storage as "auth_token"
    signin: async (email, password) => {
        console.log(API_URL.concat("/api/admin/auth/"));
        const resp = await fetch(API_URL.concat("/api/admin/auth/"), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then((response) => {
                console.log(response.status);
                if (response.status == '200') {
                    //navigation.navigate("Drawer");
                    return response.json()
                } else {
                    console.log("not authorized");
                }
                //return response.json()
            })
            .then(async (json) => {
                console.log("succesful network request");

                if (json) {
                    await localStorage.storeData('auth_token', json.token);
                    await localStorage.storeData('user_id', json._id);
                    await localStorage.storeData('fullName', json.fullName);
                    await localStorage.storeData('phone', json.contactNumber);
                    initiateSocketConnection();
                    return true
                } else {
                    return false
                }
            })
            .catch((e) => {
                console.log(e);
                console.log("error");
            });

        //setup notifications
        if (Device.isDevice) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
              const { status } = await Notifications.requestPermissionsAsync();
              finalStatus = status;
            }
            if (finalStatus !== 'granted') {
              alert('Failed to get push token for push notification!');
              return;
            }
            const token = (await Notifications.getExpoPushTokenAsync()).data;
            console.log(token);
            // this.setState({ expoPushToken: token });
            let uid = await localStorage.getData("user_id");
            module.exports.send_push_token(uid,token);
          } else {
            alert('Must use physical device for Push Notifications');
          }
        
          if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
              name: 'default',
              importance: Notifications.AndroidImportance.MAX,
              vibrationPattern: [0, 250, 250, 250],
              lightColor: '#FF231F7C',
            });
          }
        return resp
    },

    get_pickups: async (query) =>{
        var query_string = API_URL.concat("/api/admin/pickup?");
        // query_string = query?query_string.concat(`?status=${query.status?query.status:0}`):query_string;
        // console.log(query_string);
        for(const key in query){
            query_string = query_string.concat(`${key}=${query[key]}`);
        }
        console.log(query_string);
        const resp = await fetch(query_string, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response)=>{
            return response.json();
        })
        .then((json)=>{
            return json;
        })
        .catch((e) =>{
            console.log(e);
            console.log("error");
        })
    return resp;
    },

    get_volunteers: async (query) =>{
        var query_string = API_URL.concat("/api/admin/volunteer?");
        // query_string = query?query_string.concat(`?status=${query.status?query.status:0}`):query_string;
        // console.log(query_string);
        for(const key in query){
            query_string = query_string.concat(`${key}=${query[key]}`);
        }
        const resp = await fetch(query_string, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response)=>{
            // console.log(response);
            return response.json();
        })
        .then((json)=>{
            return json;
        })
        .catch((e) =>{
            console.log(e);
            console.log("error");
        })
    return resp;
    },

    get_dropoffs: async () =>{
        const resp = await fetch(API_URL.concat("/api/admin/dropoff"), {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response)=>{
            // console.log(response);
            return response.json();
        })
        .then((json)=>{
            return json;
        })
        .catch((e) =>{
            console.log(e);
            console.log("error");
        })
    return resp;        
    },

    get_providers: async () =>{
        const resp = await fetch(API_URL.concat("/api/admin/provider"),{
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response)=>{
            return response.json();
        })
        .then((json)=>{
            return json
        })
        .catch((e)=>{
            console.log(e);
            console.log("error!");
        })
    return resp;
    },

    get_provider: async(id) =>{
        const resp = await fetch(API_URL.concat(`/api/admin/provider/${id}`),{
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response)=>{
            return response.json();
        })
        .then((json)=>{
            return json
        })
        .catch((e)=>{
            console.log(e);
            console.log("error!");
        })
    return resp;
    },

    update_pickups: async (id, obj) =>{
        const token = await localStorage.getData("auth_token");
        const resp = await fetch(API_URL.concat(`/api/admin/pickup/${id}`),{
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json',
                'Authorization': "Token  " + token
            },
            body: JSON.stringify(obj)
        })
        .then((response)=>{
            console.log(response);
            return response
        })
        .then((json)=>{
            //console.log("Pickup updated? ",json);
            return json
        })
    },

    get_drives: async(status) =>{
        const resp = await fetch(API_URL.concat(`/api/admin/drive/${status}`),{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response)=>{
            // console.log(response);
            return response.json();
        })
        .then((json)=>{
            return json;
        })
        .catch((e) =>{
            console.log(e);
            console.log("error");
        })
        return resp;
    },

    update_drive: async(id, obj) =>{
        const token = await localStorage.getData("auth_token");
        const resp = await fetch(API_URL.concat(`/api/admin/drive/${id}`),{
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json',
                'Authorization': "Token  " + token
            },
            body: JSON.stringify(obj)
        })
        .then((response)=>{
            console.log("Update drive Api: ",response);
            return response
        })
        .then((json)=>{
            //console.log("Pickup updated? ",json);
            return json
        })
    },
    create_drive: async(data)=>{
        const token = await await localStorage.getData("auth_token");
        const resp = await fetch(API_URL.concat('/api/admin/drive/'),{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json',
                'Authorization': "Bearer " + token
            },
            body: JSON.stringify(data)
        })
        .then((response)=>{
            console.log("Create drive Api res: ",response);
            return response
        })
        .then((json)=>{
            //console.log("Pickup updated? ",json);
            return json
        })
        .catch((e) => {
            console.log(e);
            console.log("error");
        });
        return resp
    },

    send_push_token: async(userId, pushToken)=>{
        const token = await localStorage.getData('auth_token');
        const resp = await fetch(API_URL.concat(`/api/admin/notifications/login`), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            },
            body: JSON.stringify({
                userId: userId,
                token: pushToken,
                userType: "admin"
            })
        })
        .then((response)=>{
            return response.json();
        })
        .then((json)=>{
            console.log(json);
            return json;
        })
        .catch((e) =>{
            console.log(e);
            console.log("error");
        })
        return resp;
    }

}