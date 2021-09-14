import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DriveManagerScreen from '../screens/drive_module/DriveManagerScreen';
import DriveDetailsScreen from '../screens/drive_module/DriveDetailsScreen';

const Stack = createStackNavigator();

const DriveStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='DriveManagerScreen'
				component={DriveManagerScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='DriveDetailsScreen'
				component={DriveDetailsScreen}
				options={{ title: 'Drive Details Screen' }}
			/>
		</Stack.Navigator>
	);
};

export default DriveStack;
