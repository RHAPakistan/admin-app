import React, { useState } from 'react';
import { Keyboard, Text, Pressable, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Search from '../../components/ManagerOptions/Search';

import GlobalStyles from '../../styles/GlobalStyles';
import InductionList from '../../components/ButtonList/InductionList';

const InductionManagerScreen = ({ navigation }) => {
	const [data, setData] = useState([
		{
			id: '1',
			name: 'ABC Doe Smith',time: '2m ago',
		},
		{
			id: '2',
			name: 'FGH Doe Smith',time: '5m ago',
		},
		{
			id: '3',
			name: 'IJK Doe Smith',time: '10m ago',
		},
	]);

	const onSubmit = (query) => {
		// on submit, fetch data based on search query
		console.log('Vendor Searched', query);
	};

	const onPressHandler = (id) => {
		navigation.navigate('InductionDetailsScreen', { id });
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
