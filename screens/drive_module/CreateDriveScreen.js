import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GlobalStyles from '../../styles/GlobalStyles';

const CreateDriveScreen = ({ navigation }) => {
	return (
		<View style={GlobalStyles.container}>
		<StatusBar style='dark' />
			<Text>This is Create Drive Screen</Text>
		</View>
	);
};

export default CreateDriveScreen;
