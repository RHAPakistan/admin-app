import React, { useEffect, useState } from 'react';
import { Keyboard, Text, Pressable, View, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import Search from '../../components/ManagerOptions/Search';

import GlobalStyles from '../../styles/GlobalStyles';
import VolunteerList from '../../components/ButtonList/VolunteerList';
const adminApi = require("../../helpers/adminApi");

const VolunteerManagerScreen = ({ navigation }) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const searchQuery = async (val)=>{
		const resp = await adminApi.search_volunteers(val);
		return resp
	}
	useEffect(()=>{
		const onMount = navigation.addListener('focus', ()=>{
			const fetchData = async()=>{
			const resp = await adminApi.get_volunteers();
			return resp
		}
		fetchData()
		.then((response)=>{
			console.log("Volunteers fetched are: ",response);
			setData(response);
			setIsLoading(false);
		})
	});

	const unsub = () =>{
		onMount();
	}
	},[navigation, data])

	const onSubmit = (query) => {
		// on submit, fetch data based on search query
		setIsLoading(true);
		console.log('Volunteer Searched', query);
		searchQuery(query)
		.then((res)=>{
			console.log("Seaach Response ",res);
			setData(res.volunteers);
			setIsLoading(false);
			if(res.error == 1){
				alert("No such result. Returning all data");
			}
		})
		.catch((e)=>{
			console.log("Error: ",e);
		});
	};

	const onPressHandler = (id) => {
		navigation.navigate('VolunteerDetailsScreen', { id });
	};

	return (
		<Pressable onPress={Keyboard.dismiss} style={GlobalStyles.container}>
			<StatusBar style='light' />
			{isLoading && <ActivityIndicator color={"#165E2E"} />}
			<View style={GlobalStyles.screenTitle}>
				<Text style={GlobalStyles.screenTitleText}>Volunteer Manager</Text>
			
				<Pressable
					style={GlobalStyles.screenTitleButton}
					onPress={() => navigation.navigate("VolunteerSignup")}>
					<Entypo name='plus' size={30} color={Colors.white} />
				</Pressable>
			</View>

			<Search onSubmit={onSubmit} placeholder='Search Volunteer name, location or gender' />

			<VolunteerList data={data} onPress={onPressHandler} />
		</Pressable>
	);
};

export default VolunteerManagerScreen;
