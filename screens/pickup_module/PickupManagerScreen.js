import React, { useState } from 'react';
import { Text, Pressable, View, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Options from '../../components/ManagerOptions/Options';

import GlobalStyles from '../../styles/GlobalStyles';
import PickupList from '../../components/ButtonList/PickupList';

const PickupManagerScreen = ({ navigation }) => {
	const [data, setData] = useState([
		{ id: '1', time: '2m ago', address: 'Plot 111, XYZ Street' },
		{ id: '2', time: '5m ago', address: 'Plot 222, XYZ Street' },
		{ id: '3', time: '10m ago', address: 'Plot 333, XYZ Street' },
		{ id: '4', time: '15m ago', address: 'Plot 444, XYZ Street' },
		{ id: '5', time: '34m ago', address: 'Plot 555, XYZ Street' },
		{ id: '6', time: '1h 2m ago', address: 'Plot 666, XYZ Street' },
	]);

	const onChange = (query) => {
		// fetch data here
		console.log('Pickup Status Changed', query);
	};

	const onPressHandler = (id) => {
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
					'Vendors',
					'Guests',
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
