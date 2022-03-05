import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InductionManagerScreen from '../screens/induction_module/InductionManagerScreen';
import InductionDetailsScreen from '../screens/induction_module/InductionDetailsScreen';
import EditInductionDetailsScreen from '../screens/induction_module/EditInductionDetailsScreen';
import NotificationScreen from '../screens/NotificationScreen';

import PrimaryHeader from '../components/ScreenHeaders/PrimaryHeader';
import HeaderWithEdit from '../components/ScreenHeaders/HeaderWithEdit';

const Stack = createStackNavigator();

const InductionStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='InductionManagerScreen'
				component={InductionManagerScreen}
				options={({ navigation }) => {
					const title = 'Location: Karachi East';
					return PrimaryHeader(navigation, title);
				}}
			/>
			<Stack.Screen
				name='InductionDetailsScreen'
				component={InductionDetailsScreen}
				options={({ navigation, route }) => {
					const title = 'Induction #' + route.params.id;
					const screen = 'EditInductionDetailsScreen';
					return HeaderWithEdit(navigation, route, title, screen);
				}}
			/>
			<Stack.Screen
				name='EditInductionDetailsScreen'
				component={EditInductionDetailsScreen}
				options={({ route }) => ({ title: 'Edit Induction #' + route.params.id })}
			/>
			<Stack.Screen
				name='NotificationScreen'
				component={NotificationScreen}
				options={{ title: 'Notifications' }}
			/>
		</Stack.Navigator>
	);
};

export default InductionStack;
