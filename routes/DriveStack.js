import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DriveManagerScreen from '../screens/drive_module/DriveManagerScreen';
import DriveDetailsScreen from '../screens/drive_module/DriveDetailsScreen';
import EditDriveDetailsScreen from '../screens/drive_module/EditDriveDetailsScreen';
import CreateDriveScreen from '../screens/drive_module/CreateDriveScreen';
import DriveParticipantsScreen from '../screens/drive_module/DriveParticipantsScreen';
import NotificationScreen from '../screens/NotificationScreen';

import PrimaryHeader from '../components/PrimaryHeader';

const Stack = createStackNavigator();
const title = 'Location: Karachi East';

const DriveStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='DriveManagerScreen'
				component={DriveManagerScreen}
				options={({ navigation }) => {
					return PrimaryHeader(navigation, title);
				}}
			/>
			<Stack.Screen
				name='DriveDetailsScreen'
				component={DriveDetailsScreen}
				options={({ route }) => ({ title: 'Drive #' + route.params.id })}
			/>
			<Stack.Screen
				name='EditDriveDetailsScreen'
				component={EditDriveDetailsScreen}
				options={{ title: 'Edit Drive Details' }}
			/>
			<Stack.Screen
				name='CreateDriveScreen'
				component={CreateDriveScreen}
				options={{ title: 'Add New Drive' }}
			/>
			<Stack.Screen
				name='DriveParticipantsScreen'
				component={DriveParticipantsScreen}
				options={{ title: 'Drive Participants List' }}
			/>
			<Stack.Screen
				name='NotificationScreen'
				component={NotificationScreen}
				options={{ title: 'Notifications' }}
			/>
		</Stack.Navigator>
	);
};

export default DriveStack;
