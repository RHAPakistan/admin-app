import React from 'react';
import { Button, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GlobalStyles from '../../styles/GlobalStyles';

const DriveManagerScreen = ({ navigation }) => {
	return (
		<View style={GlobalStyles.container}>
			<StatusBar style='light' />
			<Text>This is Drive Manager Screen</Text>
			<Button
				title='Drive Details'
				onPress={() => navigation.push('DriveDetailsScreen')}
			/>
		</View>
	);
};

export default DriveManagerScreen;
