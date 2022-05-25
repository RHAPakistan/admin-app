import { concat } from 'react-native-reanimated';
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
            query_string = query_string.concat(`${key}=${query[key]}&`);
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
    createProvider: async(provider_data) =>{
        var tok = await localStorage.getData("auth_token");
        var token = concat("Token ", tok);
        const resp = await fetch(API_URL.concat("/api/provider/register"),{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Token  " + tok 
              },
              body: JSON.stringify(provider_data)
        })
        .then(async (response) => {
            if (response.status>=400){
                console.log("Bad request from server at createProvider");
                return [false, response.status];
            }
            return response.json();
        })            
        .then(async (json) => {
            return json;
        })
        .catch(async (e) => console.log(e))
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
            //console.log("error");
        })
        return resp;
    },

    get_induction_requests: async() =>{
        const resp = await fetch(API_URL.concat('/api/admin/induction/'),{
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
            console.log("error: ",e);
        })
        return resp;
    },

    approveInductionRequest: async (id, email)=>{
        console.log("Id email: ",id,email);
        const res = await fetch(API_URL.concat(`/api/admin/induction/approve/${id}`), {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email})
        })
        .then((response)=>{
            console.log("Approve induction API res: ",response);
            return response.json();
        })
        .then((json)=>{
            return json
        })
        .catch((e)=>{
            console.log("Error: ",e)
        })
        return res;
    },

    disapproveInductionRequest: async (id, email, rejectionReasons)=>{
        const res = await fetch(API_URL.concat(`/api/admin/induction/disapprove/${id}`), {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email, rejectionReasons})
        })
        .then((response)=>{
            console.log("Disapprove induction API res: ",response);
            return response.json();
        })
        .then((json)=>{
            return json
        })
        .catch((e)=>{
            console.log("Error: ",e)
        })
        return res;
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
            //console.log("Update drive Api: ",response);
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
            //console.log("Create drive Api res: ",response);
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

    auth_forgot: async (email) =>{
        const resp = await fetch(API_URL.concat('/api/admin/auth/forgot'), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email})
        })
        .then((response)=>{
            console.log("Auth Forget res: ",response)
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
    },
    delete_provider: async(id)=>{
        const token = await localStorage.getData('auth_token');
        const resp = await fetch(API_URL.concat(`/api/admin/provider/${id}`), {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+token
            },

        })
        .then((response)=>{
            return response.json()
        })
        .then((json)=>{
            return json;
        })
        .catch((e)=>{
            console.log(e);
        })
        if(resp.success){
            return true
        }
        else{
            return false
        }
    },
    delete_volunteer: async(id)=>{
        const token = await localStorage.getData('auth_token');
        const resp = await fetch(API_URL.concat(`/api/admin/volunteer/${id}`), {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+token
            },

        })
        .then((response)=>{
            return response.json()
        })
        .then((json)=>{
            return json;
        })
        .catch((e)=>{
            console.log(e);
        })
        if(resp.error==0){
            return true
        }
        else{
            return false
        }
    },
    auth_forgot_verifyOTP: async (email, otp) =>{
        const resp = await fetch(API_URL.concat('/api/admin/auth/forgot/verifyOTP'), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email, otp: otp})
        })
        .then((response)=>{
            console.log("Auth Forget verify res: ",response)
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
    },

    auth_forgot_changePassword: async (email, otp, password) =>{
        const resp = await fetch(API_URL.concat('/api/admin/auth/forgot/changePassword'), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email, otp: otp, newPassword: password})
        })
        .then((response)=>{
            console.log("Auth Forget change pass res: ",response)
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
    },

    createVolunteer: async(volunteer_data) =>{
        var tok = await localStorage.getData("auth_token");
        var token = concat("Token ", tok);
        const resp = await fetch(API_URL.concat("/api/volunteer/register"),{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Token  " + tok 
              },
              body: JSON.stringify(volunteer_data)
        })
        .then(async (response) => {
            if (response.status>=400){
                console.log("Bad request from server at createProvider");
                return [false, response.status];
            }
            return response.json();
        })            
        .then(async (json) => {
            return json;
        })
        .catch(async (e) => console.log(e))
        return resp; 
    },
    search_volunteers: async (val) =>{
        const resp = await fetch(API_URL.concat('/api/admin/volunteer/search'), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text: val})
        })
        .then((response)=>{
            //console.log("Search res: ",response)
            return response.json();
        })
        .then((json)=>{
            //console.log(json);
            return json;
        })
        .catch((e) =>{
            console.log("error: ",e);
        })
        return resp;
    },
    search_providers: async (val) =>{
        const resp = await fetch(API_URL.concat('/api/admin/provider/search'), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text: val})
        })
        .then((response)=>{
            //console.log("Search res: ",response)
            return response.json();
        })
        .then((json)=>{
            //console.log(json);
            return json;
        })
        .catch((e) =>{
            console.log("error: ",e);
        })
        return resp;
    },
    search_requests: async (val) =>{
        const resp = await fetch(API_URL.concat('/api/admin/induction/search'), {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text: val})
        })
        .then((response)=>{
            //console.log("Search res: ",response)
            return response.json();
        })
        .then((json)=>{
            //console.log(json);
            return json;
        })
        .catch((e) =>{
            console.log("error: ",e);
        })
        return resp;
    },

    get_drive_participants : async(id)=>{
        const resp = await fetch(API_URL.concat(`/api/admin/drive/participants/${id}`),{
            method: 'GET',
            headers: {
                Accept: 'applicaiton/json',
                'Content-Type': 'application/json'
            },
        })
        .then((response)=>{
            return response.json();
        })
        .then((json)=>{
            return json;
        })
        .catch((e)=>{
            console.log("error ",e);
        })
        return resp
    },

    get_volunteers_by_distance: async(coordinates)=>{
        const resp = await fetch(API_URL.concat('/api/volunteer/getByDistance'),{
            method: 'POST',
            headers: {
                Accept: 'applicaiton/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"pickup_coordinates":coordinates?coordinates:[0,0]})
        })
        .then((response)=>{
            return response.json();
        })
        .then((json)=>{
            return json;
        })
        .catch((e)=>{
            console.log("error ",e);
        })
        return resp
    },

    get_volunteers_by_distance: async(coordinates)=>{
        const resp = await fetch(API_URL.concat('/api/volunteer/getByDistance'),{
            method: 'POST',
            headers: {
                Accept: 'applicaiton/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"pickup_coordinates":coordinates?coordinates:[0,0]})
        })
        .then((response)=>{
            return response.json();
        })
        .then((json)=>{
            return json;
        })
        .catch((e)=>{
            console.log("error ",e);
        })
        return resp
    }

}

