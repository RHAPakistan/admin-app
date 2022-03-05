import * as SecureStore from 'expo-secure-store';
import { concat } from 'react-native-reanimated';
import { retrySymbolicateLogNow } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import { API_URL } from "../config.json";
import {initiateSocketConnection} from "../context/socket";
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

    get_pickups: async (query) =>{
        var query_string = API_URL.concat("/api/admin/pickup?");
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
    }

}