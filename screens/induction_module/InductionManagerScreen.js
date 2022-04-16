import React, { useState, useEffect } from 'react';
import { Keyboard, Text, Pressable, View, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Search from '../../components/ManagerOptions/Search';

import GlobalStyles from '../../styles/GlobalStyles';
import InductionList from '../../components/ButtonList/InductionList';
const adminApi = require("../../helpers/adminApi");

const InductionManagerScreen = ({ navigation }) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const fetchData = async()=>{
		const resp = await adminApi.get_induction_requests();
		return resp;
	}

	useEffect(()=>{
		fetchData()
		.then((response)=>{
			console.log("Induction Requests: ",response);
			setData(response);
			setIsLoading(false);
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
			{isLoading && <ActivityIndicator color={"#165E2E"} />}
			<View style={GlobalStyles.screenTitle}>
				<Text style={GlobalStyles.screenTitleText}>Induction Manager</Text>
				
			</View>

			{/* <Search onSubmit={onSubmit} placeholder='Search Name' /> */}
			{
			data.length>0?
				<InductionList data={data} onPress={onPressHandler} />
			: 
				<View>
					<Text style={{fontSize: 18,fontWeight: 'bold', textAlign: 'center', paddingTop: '5%'}}>No Data</Text>
				</View>
			}
			
		</Pressable>
	);
};

export default InductionManagerScreen;
