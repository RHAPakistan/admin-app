import React from 'react';
import { Button, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GlobalStyles from '../../styles/GlobalStyles';

const PickupManagerScreen = ({ navigation }) => {
	return (
		<View style={GlobalStyles.container}>
			<StatusBar style='light' />
			<Text>This is Pickup Manager Screen</Text>
			<Button
				title='Pickup Details'
				onPress={() => navigation.push('PickupDetailsScreen')}
			/>
		</View>
	);
};

export default PickupManagerScreen;
