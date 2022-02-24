import 'react-native-gesture-handler';
import React from 'react';
// import LoginStack from './routes/LoginStack';
import { NavigationContainer } from '@react-navigation/native';
import RootDrawer from './routes/RootDrawer';
import { SocketContext, socket } from './context/socket.js';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home';

export default function App() {
	// Load token here
	const Stack = createStackNavigator();
	return (
		<SocketContext.Provider value={socket}>
			{/* <NavigationContainer>
				<RootDrawer />
			</NavigationContainer> */}
			<NavigationContainer>
		<Stack.Navigator>
		<Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Home' }, { headerShown: false }}
            />
		<Stack.Screen
              name="Drawer"
              component={RootDrawer}
              options={{ title: 'Drawer' }, { headerShown: false }}
            />	
		</Stack.Navigator>
		</NavigationContainer>
		</SocketContext.Provider>
	);
}
