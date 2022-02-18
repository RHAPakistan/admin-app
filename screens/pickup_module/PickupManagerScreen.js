import React, { useEffect, useState } from 'react';
import { Text, Pressable, View, Keyboard, Card, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Options from '../../components/ManagerOptions/Options';

import GlobalStyles from '../../styles/GlobalStyles';
import PickupList from '../../components/ButtonList/PickupList';
const  adminApi = require("../../helpers/adminApi");

const PickupManagerScreen = ({ navigation }) => {
	const [data, setData] = useState([]);
	
	useEffect(()=>{
		const fetchData = async()=>{
			const resp = await adminApi.get_pickups();
			return resp.pickups;
		}
		fetchData()
		.then((response)=>{
			setData(response);
		})
		.catch((e)=>{
			console.log(e);
		})
	},[]);
	const onChange = async(query) => {
		// fetch data here
		const response = await adminApi.get_pickups();
		setData(response.pickups);
		console.log('Pickup Status Changed', query);
	};

	const onPressHandler = (id) => {
		// console.log(id);
		console.log(id);
		navigation.navigate('PickupDetailsScreen', { id });
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
