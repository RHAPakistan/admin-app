import React, { useState, useEffect } from 'react';
import { Keyboard, Text, Pressable, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Search from '../../components/ManagerOptions/Search';

import GlobalStyles from '../../styles/GlobalStyles';
import InductionList from '../../components/ButtonList/InductionList';
const adminApi = require("../../helpers/adminApi");

const InductionManagerScreen = ({ navigation }) => {
	const [data, setData] = useState([]);

	const fetchData = async()=>{
		const resp = await adminApi.get_induction_requests();
		return resp;
	}

	useEffect(()=>{
		fetchData()
		.then((response)=>{
			console.log("Induction Requests: ",response);
			setData(response);
		})
		.catch((e)=>{
			console.log(e);
		})
	},[]);

	const onSubmit = (query) => {
		// on submit, fetch data based on search query
		console.log('Vendor Searched', query);
	};

	const onPressHandler = (data) => {
		navigation.navigate('InductionDetailsScreen', { data });
	};

	return (
		<Pressable onPress={Keyboard.dismiss} style={GlobalStyles.container}>
			<StatusBar style='light' />

			<View style={GlobalStyles.screenTitle}>
				<Text style={GlobalStyles.screenTitleText}>Induction Manager</Text>
				
			</View>

			<Search onSubmit={onSubmit} placeholder='Search Name' />

			<InductionList data={data} onPress={onPressHandler} />
		</Pressable>
	);
};

export default InductionManagerScreen;
