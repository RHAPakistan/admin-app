import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VendorManagerScreen from '../screens/vendor_module/VendorManagerScreen';
import VendorDetailsScreen from '../screens/vendor_module/VendorDetailsScreen';
import EditVendorDetailsScreen from '../screens/vendor_module/EditVendorDetailsScreen';
import CreateVendorScreen from '../screens/vendor_module/CreateVendorScreen';
import VendorHistoryScreen from '../screens/vendor_module/VendorHistoryScreen';
import NotificationScreen from '../screens/NotificationScreen';

import PrimaryHeader from '../components/ScreenHeaders/PrimaryHeader';
import HeaderWithEdit from '../components/ScreenHeaders/HeaderWithEdit';

const Stack = createStackNavigator();

const VendorStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='VendorManagerScreen'
				component={VendorManagerScreen}
				options={({ navigation }) => {
					const title = 'Location: Karachi East';
					return PrimaryHeader(navigation, title);
				}}
			/>
			<Stack.Screen
				name='VendorDetailsScreen'
				component={VendorDetailsScreen}
				options={({ navigation, route }) => {
					const title = 'Vendor #' + route.params.id;
					const screen = 'EditVendorDetailsScreen';
					return HeaderWithEdit(navigation, route, title, screen);
				}}
			/>
			<Stack.Screen
				name='EditVendorDetailsScreen'
				component={EditVendorDetailsScreen}
				options={({ route }) => ({ title: 'Edit Vendor #' + route.params.id })}
			/>
			<Stack.Screen
				name='CreateVendorScreen'
				component={CreateVendorScreen}
				options={{ title: 'Add New Vendor' }}
			/>
			<Stack.Screen
				name='VendorHistoryScreen'
				component={VendorHistoryScreen}
				options={({ route }) => ({
					title: 'Vendor #' + route.params.id + ' History',
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

export default VendorStack;
