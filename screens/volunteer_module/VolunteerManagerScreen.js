import React, { useState } from 'react';
import { Keyboard, Text, Pressable, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Search from '../../components/ManagerOptions/Search';

import GlobalStyles from '../../styles/GlobalStyles';
import VolunteerList from '../../components/ButtonList/VolunteerList';

const VolunteerManagerScreen = ({ navigation }) => {
	const [data, setData] = useState([
		{
			id: '1',
			name: 'ABC Doe Smith',
			phone: '+92 345 1234567',
		},
		{
			id: '2',
			name: 'FGH Doe Smith',
			phone: '+92 345 1234567',
		},
		{
			id: '3',
			name: 'IJK Doe Smith',
			phone: '+92 345 1234567',
		},
	]);

	const onSubmit = (query) => {
		// on submit, fetch data based on search query
		console.log('Vendor Searched', query);
	};

	const onPressHandler = (id) => {
		navigation.navigate('VolunteerDetailsScreen', { id });
	};

	return (
		<Pressable onPress={Keyboard.dismiss} style={GlobalStyles.container}>
			<StatusBar style='light' />

			<View style={GlobalStyles.screenTitle}>
				<Text style={GlobalStyles.screenTitleText}>Volunteer Manager</Text>
				
			</View>

			<Search onSubmit={onSubmit} placeholder='Search Volunteer' />

			<VolunteerList data={data} onPress={onPressHandler} />
		</Pressable>
	);
};

export default VolunteerManagerScreen;
