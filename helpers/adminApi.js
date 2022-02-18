import * as SecureStore from 'expo-secure-store';
import { concat } from 'react-native-reanimated';
import { retrySymbolicateLogNow } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import { API_URL } from "../config.json";
module.exports = {
    //this funtion returns true if the user is valid else false
    //the funtion also adds the token to secure storage as "auth_token"
    signin: async (email, password) => {
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
                    await SecureStore.setItemAsync('auth_token', json.token);
                    await SecureStore.setItemAsync('provider_id', json._id);
                    return true
                } else {
                    return false
                }
            })
            .catch((e) => {
                console.log(e);
                console.log("error");
            });
        return resp
    },

    get_pickups: async () =>{
        const resp = await fetch(API_URL.concat("/api/admin/pickup"), {
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

    get_volunteers: async () =>{
        const resp = await fetch(API_URL.concat("/api/admin/volunteer"), {
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
    }

}