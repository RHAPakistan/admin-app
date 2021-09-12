import React from 'react';
import { Text, SafeAreaView, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GlobalStyles from '../../styles/GlobalStyles';
import Colors from '../../styles/Colors';

const LoginScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={[GlobalStyles.container, GlobalStyles.bgGreen]}>
			<StatusBar backgroundColor={Colors.green} style='light' />
			<Text>This is Login Screen</Text>
			<Button
				title='Forgot Password'
				onPress={() => navigation.push('ForgotScreen')}
			/>
		</SafeAreaView>
	);
};

export default LoginScreen;
