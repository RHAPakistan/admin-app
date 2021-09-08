import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import GlobalStyles from './styles/GlobalStyles';

export default function App() {
	// Boolean return after processing a function
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	if (isAuthenticated) {
		return (
			// Dashboard
			<View style={GlobalStyles.container}>
				<Text>You are Logged in</Text>
			</View>
		);
	} else {
		return (
			// Login Screen
			<View style={GlobalStyles.container}>
				<Text>You are a new user</Text>
			</View>
		);
	}

	// <StatusBar style='auto' />
}
