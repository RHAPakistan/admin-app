import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PickupStack from './PickupStack';
import DriveStack from './DriveStack';
import CustomDrawerContent from '../components/CustomDrawerContent';
import DrawerStyles from '../styles/DrawerStyles';

const Drawer = createDrawerNavigator();

const RootDrawer = () => {
	return (
		<Drawer.Navigator
			screenOptions={DrawerStyles}
			initialRouteName='PickupStack'
			backBehavior='history'
			drawerContent={(props) => <CustomDrawerContent {...props} />}>
			<Drawer.Screen
				name='Drive Manager'
				component={DriveStack}
				options={{ headerShown: false }}
			/>
			<Drawer.Screen
				name='Pickup Manager'
				component={PickupStack}
				options={{ headerShown: false }}
			/>
		</Drawer.Navigator>
	);
};

export default RootDrawer;
