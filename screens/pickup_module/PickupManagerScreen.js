import React, { useContext, useEffect, useState } from 'react';
import { Text, Pressable, View, Keyboard, Card, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Options from '../../components/ManagerOptions/Options';
import { socket, SocketContext } from '../../context/socket';
import GlobalStyles from '../../styles/GlobalStyles';
import PickupList from '../../components/ButtonList/PickupList';

const  adminApi = require("../../helpers/adminApi");

const PickupManagerScreen = ({ navigation }) => {
	const socket = useContext(SocketContext);
	const [data, setData] = useState([]);
	const [status_no, setStatus] = useState(0);	

	const turnOnSocket = async() =>{
		socket.on("initiatePickup", (socket_data)=>{
			console.log("a pickup request initiated by " + socket_data.message._id);
			data.push(socket_data.message);
			setData(data);
			console.log(data);
		})
	}
	useEffect(()=>{
		console.log("pickup manager screen mounted");
		const fetchData = async()=>{
			const resp = await adminApi.get_pickups();
			return resp.pickups;
		}
		fetchData()
		.then((response)=>{
			setData(response);
		//this will add a new request from provider in real time
			turnOnSocket();
		})
		.catch((e)=>{
			console.log(e);
		})		
		

		return () => {
			console.log("turning off socket");
			socket.off("initiateRequest");
		}
		
	},[]);
	const onChange = async(query) => {
		// fetch data here;
		if (query.index==0){
			const response = await adminApi.get_pickups();
			setData(response.pickups);
			setStatus(status_no);
		}
		else{
			const response = await adminApi.get_pickups({"status":query.index-1});
			setData(response.pickups);
			const indie = query.index - 1;
			setStatus(indie);
			console.log('Pickup Status Changed', query);
			console.log(status_no);
		}
	};

	const onPressHandler = (id) => {
		navigation.navigate('PickupDetailsScreen', { pickup:id });

	};


	return (
		<Pressable onPress={Keyboard.dismiss} style={GlobalStyles.container}>
			<StatusBar style='light' />

			<View style={GlobalStyles.screenTitle}>
				<Text style={GlobalStyles.screenTitleText}>Pickup Manager</Text>
			</View>

			<Options
				onChange={onChange}
				label='Status'
				data={[
					'All',
					'Unassigned',
					'Pending',
					'Processing',
					'Completed',
					'Cancelled',
				]}
			/>

			<PickupList data={data} onPress={onPressHandler} />
		</Pressable>
	);
};

export default PickupManagerScreen;
