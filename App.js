import 'react-native-gesture-handler';
import React from 'react';
// import LoginStack from './routes/LoginStack';
import { NavigationContainer } from '@react-navigation/native';
import RootDrawer from './routes/RootDrawer';
import { SocketContext, socket } from './context/socket.js';
export default function App() {
	// Load token here

	return (
		<SocketContext.Provider value={socket}>
		<NavigationContainer>
			<RootDrawer />
		</NavigationContainer>
		</SocketContext.Provider>
	);
}
