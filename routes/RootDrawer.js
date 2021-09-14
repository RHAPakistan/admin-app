import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PickupStack from './PickupStack';
import DriveStack from './DriveStack';

const Drawer = createDrawerNavigator();

const RootDrawer = () => {
	return (
		<Drawer.Navigator initialRouteName='PickupStack'>
			<Drawer.Screen
				name='PickupStack'
				component={PickupStack}
				options={{ headerShown: false }}
			/>
			<Drawer.Screen
				name='DriveStack'
				component={DriveStack}
				options={{ headerShown: false }}
			/>
		</Drawer.Navigator>
	);
};

export default RootDrawer;
