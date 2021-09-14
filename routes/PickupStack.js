import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PickupManagerScreen from '../screens/pickup_module/PickupManagerScreen';
import PickupDetailsScreen from '../screens/pickup_module/PickupDetailsScreen';
import NotificationScreen from '../screens/NotificationScreen';

import PrimaryHeader from '../components/PrimaryHeader';
const Stack = createStackNavigator();

const PickupStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='PickupManagerScreen'
				component={PickupManagerScreen}
				options={({ navigation }) => {
					return PrimaryHeader(navigation, 'Pickup Manager');
				}}
			/>
			<Stack.Screen
				name='PickupDetailsScreen'
				component={PickupDetailsScreen}
				options={{ title: 'Pickup Details' }}
			/>
			<Stack.Screen
				name='NotificationScreen'
				component={NotificationScreen}
				options={{ title: 'Notifications' }}
			/>
		</Stack.Navigator>
	);
};

export default PickupStack;
