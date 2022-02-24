import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login_module/LoginScreen';
import ForgotScreen from '../screens/login_module/ForgotScreen';

const Stack = createStackNavigator();

const LoginStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='LoginScreen'
				component={LoginScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='ForgotScreen'
				component={ForgotScreen}
				options={{ title: 'Forgot Password' }}
			/>
		</Stack.Navigator>
	);
};

export default LoginStack;
