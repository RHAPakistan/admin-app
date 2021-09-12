import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/login_module/LoginScreen';
import ForgotScreen from '../screens/login_module/ForgotScreen';

const Stack = createStackNavigator();

const LoginStack = () => {
	const isAuthenticated = true;
	return (
		<NavigationContainer>
			<Stack.Navigator>
				{isAuthenticated ? (
					<>
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
					</>
				) : (
					<>
						<Stack.Screen name='Home' component='Home' />
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default LoginStack;
