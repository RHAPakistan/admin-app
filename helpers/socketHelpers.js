import {socket} from "../context/socket";


module.exports={

    listen_for_cancel_on: async()=>{
        socket.on("informCancelPickupAtStatus0", (socket_data)=>{
            
        })
    }
}