import 'react-native-gesture-handler';
import React from 'react';
// import LoginStack from './routes/LoginStack';
import { NavigationContainer } from '@react-navigation/native';
import RootDrawer from './routes/RootDrawer';

export default function App() {
	// Load token here

	return (
		<NavigationContainer>
			<RootDrawer />
		</NavigationContainer>
	);
}
