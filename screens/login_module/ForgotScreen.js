import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GlobalStyles from '../../styles/GlobalStyles';
import Colors from '../../styles/Colors';

const ForgotScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={GlobalStyles.container}>
			<StatusBar backgroundColor={Colors.white} style='dark' />
			<Text>This is Forgot Password Screen</Text>
		</SafeAreaView>
	);
};

export default ForgotScreen;
