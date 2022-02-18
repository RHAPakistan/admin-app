import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PickupManagerScreen from '../screens/pickup_module/PickupManagerScreen';
import PickupDetailsScreen from '../screens/pickup_module/PickupDetailsScreen';
import SelectDropoffScreen from '../screens/pickup_module/SelectDropoffScreen';
import SelectVolunteerScreen from '../screens/pickup_module/SelectVolunteerScreen';
import NotificationScreen from '../screens/NotificationScreen';

import PrimaryHeader from '../components/ScreenHeaders/PrimaryHeader';

const Stack = createStackNavigator();
const title = 'Location: Karachi East';

const PickupStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='PickupManagerScreen'
				component={PickupManagerScreen}
				options={({ navigation }) => {
					return PrimaryHeader(navigation, title);
				}}
			/>
			<Stack.Screen
				name='PickupDetailsScreen'
				component={PickupDetailsScreen}
				options={({ route }) => ({ title: 'Pickup #'})}
			/>
			<Stack.Screen
				name='SelectDropoffScreen'
				component={SelectDropoffScreen}
				options={{ title: 'Assign Dropoff Location' }}
			/>
			<Stack.Screen
				name='SelectVolunteerScreen'
				component={SelectVolunteerScreen}
				options={{ title: 'Assign Volunteer Location' }}
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
