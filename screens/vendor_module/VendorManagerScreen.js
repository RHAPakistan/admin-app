import React, { useEffect, useState } from 'react';
import { Keyboard, Text, Pressable, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';

import Search from '../../components/ManagerOptions/Search';

import GlobalStyles from '../../styles/GlobalStyles';
import VendorList from '../../components/ButtonList/VendorList';
import adminApi from "../../helpers/adminApi";

const VendorManagerScreen = ({ navigation }) => {
	const [data, setData] = useState([]);

	useEffect(()=>{
		const onMount = navigation.addListener('focus', ()=>{
			const fetchData = async()=>{
			const resp = await adminApi.get_providers();
			return resp
		}
		fetchData()
		.then((response)=>{
			console.log("Get providers");
			setData(response);
		})
	});

	const unsub = () =>{
		onMount();
	}
	},[navigation])
	const onSubmit = (query) => {
		// on submit, fetch data based on search query
		console.log('Vendor Searched', query);
	};

	const onPressHandler = (id) => {
		navigation.navigate('VendorDetailsScreen', { id });
	};

	return (
		<Pressable onPress={Keyboard.dismiss} style={GlobalStyles.container}>
			<StatusBar style='light' />

			<View style={GlobalStyles.screenTitle}>
				<Text style={GlobalStyles.screenTitleText}>Provider Manager</Text>
				<Pressable
					style={GlobalStyles.screenTitleButton}
					onPress={() => navigation.push('CreateVendorScreen')}>
					<Entypo name='plus' size={30} color={Colors.white} />
				</Pressable>
			</View>

			{/* <Search onSubmit={onSubmit} placeholder='Search Vendor' /> */}

			<VendorList data={data} onPress={onPressHandler} />
		</Pressable>
	);
};

export default VendorManagerScreen;
