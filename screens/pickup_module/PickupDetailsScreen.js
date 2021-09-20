import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GlobalStyles from '../../styles/GlobalStyles';

const PickupDetailsScreen = ({ navigation, route }) => {
	const { key } = route.params;
	return (
		<View style={GlobalStyles.container}>
			<StatusBar style='dark' />
			<Text>This is Pickup Details Screen</Text>
			<Text>Key: #{key}</Text>
		</View>
	);
};

export default PickupDetailsScreen;
