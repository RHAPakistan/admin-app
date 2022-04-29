import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DriveManagerScreen from '../screens/drive_module/DriveManagerScreen';
import DriveDetailsScreen from '../screens/drive_module/DriveDetailsScreen';
import EditDriveDetailsScreen from '../screens/drive_module/EditDriveDetailsScreen';
import CreateDriveScreen from '../screens/drive_module/CreateDriveScreen';
import DriveParticipantsScreen from '../screens/drive_module/DriveParticipantsScreen';
import NotificationScreen from '../screens/NotificationScreen';

import VolunteerHistoryScreen from '../screens/volunteer_module/VolunteerHistoryScreen';
import VolunteerDetailsScreen from '../screens/volunteer_module/VolunteerDetailsScreen';

import PrimaryHeader from '../components/ScreenHeaders/PrimaryHeader';
import HeaderWithEdit from '../components/ScreenHeaders/HeaderWithEdit';

const Stack = createStackNavigator();

const DriveStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='DriveManagerScreen'
				component={DriveManagerScreen}
				options={({ navigation }) => {
					const title = 'Location: Karachi East';
					return PrimaryHeader(navigation, title);
				}}
			/>
			<Stack.Screen
				name='DriveDetailsScreen'
				component={DriveDetailsScreen}
				options={({ navigation, route }) => {
					//console.log("The header: ", route);
					const title = 'Drive #' + route.params.id._id;
					const screen = 'EditDriveDetailsScreen';
					return HeaderWithEdit(navigation, route, title, screen);
				}}
			/>
			<Stack.Screen
				name='EditDriveDetailsScreen'
				component={EditDriveDetailsScreen}
				options={({ route }) => ({ 
					title: 'Edit Drive #' + route.params.id._id })}
			/>
			<Stack.Screen
				name='CreateDriveScreen'
				component={CreateDriveScreen}
				options={{ title: 'Add New Drive' }}
			/>
			<Stack.Screen
				name='DriveParticipantsScreen'
				component={DriveParticipantsScreen}
				//options={{ title: 'Drive Participants List' }}
				options={({ route }) => ({ 
					title: 'Drive Participants List' })}
			/>
			<Stack.Screen
				name='NotificationScreen'
				component={NotificationScreen}
				options={{ title: 'Notifications' }}
			/>
			<Stack.Screen
				name='VolunteerDetailsScreen'
				component={VolunteerDetailsScreen}
				options={({ navigation }) => {
					const title = 'Volunteer';
					//const screen = 'EditVolunteerDetailsScreen';
					return PrimaryHeader(navigation, title);;
				}}
			/>
			<Stack.Screen
				name='VolunteerHistoryScreen'
				component={VolunteerHistoryScreen}
				options={({ route }) => ({
					title: 'Volunteer History',
				})}
			/>
		</Stack.Navigator>
	);
};

export default DriveStack;
