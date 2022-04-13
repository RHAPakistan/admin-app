import React, { useEffect, useState } from 'react';
import { Keyboard, Text, Pressable, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import Search from '../../components/ManagerOptions/Search';

import GlobalStyles from '../../styles/GlobalStyles';
import VolunteerList from '../../components/ButtonList/VolunteerList';
const adminApi = require("../../helpers/adminApi");

const VolunteerManagerScreen = ({ navigation }) => {
	const [data, setData] = useState([]);

	useEffect(()=>{
		const onMount = navigation.addListener('focus', ()=>{
			const fetchData = async()=>{
			const resp = await adminApi.get_volunteers();
			return resp
		}
		fetchData()
		.then((response)=>{
			setData(response);
		})
	});

	const unsub = () =>{
		onMount();
	}
	},[navigation])

	const onSubmit = (query) => {
		// on submit, fetch data based on search query
		console.log('Volunteer Searched', query);
	};

	const onPressHandler = (id) => {
		navigation.navigate('VolunteerDetailsScreen', { id });
	};

	return (
		<Pressable onPress={Keyboard.dismiss} style={GlobalStyles.container}>
			<StatusBar style='light' />

			<View style={GlobalStyles.screenTitle}>
				<Text style={GlobalStyles.screenTitleText}>Volunteer Manager</Text>
				<Pressable
					style={GlobalStyles.screenTitleButton}
					onPress={() => navigation.navigate("VolunteerSignup")}>
					<Entypo name='plus' size={30} color={Colors.white} />
				</Pressable>
			</View>

			{/* <Search onSubmit={onSubmit} placeholder='Search Volunteer' /> */}

			<VolunteerList data={data} onPress={onPressHandler} />
		</Pressable>
	);
};

export default VolunteerManagerScreen;
