import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PickupStack from './PickupStack';
import DriveStack from './DriveStack';
import VendorStack from './VendorStack';
import CustomDrawerContent from '../components/CustomDrawerContent';

const DrawerStyles = {
	drawerActiveBackgroundColor: Colors.lightGreen,
	drawerActiveTintColor: Colors.white,
	drawerInactiveTintColor: Colors.green,
	drawerItemStyle: {
		marginHorizontal: 0,
		marginVertical: 0,
		height: 48,
		borderRadius: 0,
	},
	drawerLabelStyle: {
		marginHorizontal: 8,
		fontSize: 16,
	},
};

const Drawer = createDrawerNavigator();

const RootDrawer = () => {
	return (
		<Drawer.Navigator
			screenOptions={DrawerStyles}
			// initialRouteName='Pickup Manager'
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
			<Drawer.Screen
				name='Vendor Manager'
				component={VendorStack}
				options={{ headerShown: false }}
			/>
		</Drawer.Navigator>
	);
};

export default RootDrawer;
