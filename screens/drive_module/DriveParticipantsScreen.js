import React, { useEffect, useState } from 'react';
import { Keyboard, Text, Pressable, View, ActivityIndicator, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Search from '../../components/ManagerOptions/Search';

import GlobalStyles from '../../styles/GlobalStyles';
import VolunteerList from '../../components/ButtonList/VolunteerList';
const adminApi = require("../../helpers/adminApi");

const DriveParticipantsScreen = ({ navigation, route }) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const searchQuery = async (val)=>{
		const resp = await adminApi.search_volunteers(val);
		return resp
	}
	useEffect(()=>{
		const onMount = navigation.addListener('focus', ()=>{
			const fetchData = async()=>{
			//console.log("Id is : ",route.params.id);
			const resp = await adminApi.get_drive_participants(route.params.id);
			return resp
		}
		fetchData()
		.then((response)=>{
			console.log("Volunteers fetched are: ",response);
			setData(response.volunteers);
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
		console.log('Searched Query: ', query);
		searchQuery(query)
		.then((res)=>{
			console.log("Seaach Response ",res);
			if(res.volunteers){
				if(res.error == 1){
					Alert.alert("Oops,",res.message);
				}
				setData(res.volunteers);
				setIsLoading(false);
			}
			else {
				Alert.alert("Error: ",`${res.message}\n\nKindly report the error, thanks.`);
				setIsLoading(false);
			}
		})
		.catch((e)=>{
			console.log("Error: ",e);
			Alert.alert("Error: ",`${e.message}\n\nKindly report the error, thanks.`);
			setIsLoading(false);
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
				<Text style={GlobalStyles.screenTitleText}>Participants of the Drive</Text>
			</View>

			<Search onSubmit={onSubmit} placeholder='Search Participants by name, location or gender' />

			<VolunteerList data={data} onPress={onPressHandler} />
		</Pressable>
	);
};

export default DriveParticipantsScreen;
