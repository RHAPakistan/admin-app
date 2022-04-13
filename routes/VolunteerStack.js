import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VolunteerManagerScreen from '../screens/volunteer_module/VolunteerManagerScreen';
import VolunteerDetailsScreen from '../screens/volunteer_module/VolunteerDetailsScreen';
import EditVolunteerDetailsScreen from '../screens/volunteer_module/EditVolunteerDetailsScreen';
import VolunteerHistoryScreen from '../screens/volunteer_module/VolunteerHistoryScreen';
import NotificationScreen from '../screens/NotificationScreen';
import VolunteerSignup from '../components/volunteerSignup';
import PrimaryHeader from '../components/ScreenHeaders/PrimaryHeader';
import HeaderWithEdit from '../components/ScreenHeaders/HeaderWithEdit';

const Stack = createStackNavigator();

const VolunteerStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='VolunteerManagerScreen'
				component={VolunteerManagerScreen}
				options={({ navigation }) => {
					const title = 'Location: Karachi East';
					return PrimaryHeader(navigation, title);
				}}
			/>
			<Stack.Screen
				name='VolunteerDetailsScreen'
				component={VolunteerDetailsScreen}
				options={({ navigation, route }) => {
					const title = 'Volunteer #' + route.params.id._id;
					const screen = 'EditVolunteerDetailsScreen';
					return HeaderWithEdit(navigation, route, title, screen);
				}}
			/>
			<Stack.Screen
				name='EditVolunteerDetailsScreen'
				component={EditVolunteerDetailsScreen}
				options={({ route }) => ({ title: 'Edit Volunteer #' + route.params.id._id })}
			/>
			<Stack.Screen
				name='VolunteerHistoryScreen'
				component={VolunteerHistoryScreen}
				options={({ route }) => ({
					title: 'Volunteer #' + route.params.id + ' History',
				})}
			/>
			<Stack.Screen
				name='NotificationScreen'
				component={NotificationScreen}
				options={{ title: 'Notifications' }}
			/>
			<Stack.Screen
				name='VolunteerSignup'
				component={VolunteerSignup}
				options={{ title: 'Volunteer Signup' }}
			/>			
		</Stack.Navigator>
	);
};

export default VolunteerStack;
