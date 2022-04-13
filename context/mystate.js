import * as SecureStore from 'expo-secure-store';
import React from "react";
const localStorage = require("../helpers/localStorage");

// export const socket = socketio.connect(
//     SOCKET_URL
// );

// socket.on("request id", async (data)=>{
//     console.log("received request for provider id");
//     let prov_id = await SecureStore.getItemAsync("provider_id");
//     socket.emit("send id",{"_id":prov_id});
//     socket.off("request id");
// })
// console.log("Listening");
export const index = 0;
export const setIndex = (index)=>{index = index};

export const MystateContext = React.createContext();

