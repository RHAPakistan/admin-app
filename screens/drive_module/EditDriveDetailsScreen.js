import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GlobalStyles from '../../styles/GlobalStyles';

const EditDriveDetailsScreen = ({ navigation }) => {
	return (
		<View style={GlobalStyles.container}>
			<StatusBar style='dark' />
			<Text>This is Edit Drive Details Screen</Text>
		</View>
	);
};

export default EditDriveDetailsScreen;
