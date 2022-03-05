import * as SecureStore from 'expo-secure-store';
import { concat } from 'react-native-reanimated';
import { retrySymbolicateLogNow } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import { API_URL } from "../config.json";
import {initiateSocketConnection} from "../context/socket";

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
                    await SecureStore.setItemAsync('user_id', json._id);
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
    },

    update_pickups: async (id, obj) =>{
        const token = await SecureStore.getItemAsync("auth_token")
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
        const token = await SecureStore.getItemAsync("auth_token")
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
        const token = await SecureStore.getItemAsync("auth_token")
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
    }

}