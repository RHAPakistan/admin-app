import React, { useState } from 'react';
import { Keyboard, Text, Pressable, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';

import Search from '../../components/ManagerOptions/Search';

import GlobalStyles from '../../styles/GlobalStyles';
import VendorList from '../../components/ButtonList/VendorList';

const VendorManagerScreen = ({ navigation }) => {
	const [data, setData] = useState([
		{
			id: '1',
			title: 'Student Biryani, Branch 2',
			phone: '+92 345 1234567',
			address: 'Plot 111, XYZ Street',
		},
		{
			id: '2',
			title: 'FGH',
			phone: '+92 345 1234567',
			address: 'Plot 222, XYZ Street',
		},
		{
			id: '3',
			title: 'IJK',
			phone: '+92 345 1234567',
			address: 'Plot 333, XYZ Street',
		},
	]);

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
				<Text style={GlobalStyles.screenTitleText}>Vendor Manager</Text>
				<Pressable
					style={GlobalStyles.screenTitleButton}
					onPress={() => navigation.push('CreateVendorScreen')}>
					<Entypo name='plus' size={30} color={Colors.white} />
				</Pressable>
			</View>

			<Search onSubmit={onSubmit} placeholder='Search Vendor' />

			<VendorList data={data} onPress={onPressHandler} />
		</Pressable>
	);
};

export default VendorManagerScreen;
