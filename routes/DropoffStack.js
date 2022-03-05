import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DropoffManagerScreen from '../screens/dropoff_module/DropoffManagerScreen';
import DropoffDetailsScreen from '../screens/dropoff_module/DropoffDetailsScreen';
import EditDropoffDetailsScreen from '../screens/dropoff_module/EditDropoffDetailsScreen';
import CreateDropoffScreen from '../screens/dropoff_module/CreateDropoffScreen';
import DropoffHistoryScreen from '../screens/dropoff_module/DropoffHistoryScreen';
import NotificationScreen from '../screens/NotificationScreen';

import PrimaryHeader from '../components/ScreenHeaders/PrimaryHeader';
import HeaderWithEdit from '../components/ScreenHeaders/HeaderWithEdit';

const Stack = createStackNavigator();

const DropoffStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='DropoffManagerScreen'
				component={DropoffManagerScreen}
				options={({ navigation }) => {
					const title = 'Location: Karachi East';
					return PrimaryHeader(navigation, title);
				}}
			/>
			<Stack.Screen
				name='DropoffDetailsScreen'
				component={DropoffDetailsScreen}
				options={({ navigation, route }) => {
					const title = 'Dropoff #' + route.params.id;
					const screen = 'EditDropoffDetailsScreen';
					return HeaderWithEdit(navigation, route, title, screen);
				}}
			/>
			<Stack.Screen
				name='EditDropoffDetailsScreen'
				component={EditDropoffDetailsScreen}
				options={({ route }) => ({ title: 'Edit Dropoff #' + route.params.id })}
			/>
			<Stack.Screen
				name='CreateDropoffScreen'
				component={CreateDropoffScreen}
				options={{ title: 'Add New Dropoff' }}
			/>
			<Stack.Screen
				name='DropoffHistoryScreen'
				component={DropoffHistoryScreen}
				options={({ route }) => ({
					title: 'Dropoff #' + route.params.id + ' History',
				})}
			/>
			<Stack.Screen
				name='NotificationScreen'
				component={NotificationScreen}
				options={{ title: 'Notifications' }}
			/>
		</Stack.Navigator>
	);
};

export default DropoffStack;
