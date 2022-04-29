import 'react-native-gesture-handler';
import React from 'react';
// import LoginStack from './routes/LoginStack';
import { NavigationContainer } from '@react-navigation/native';
import RootDrawer from './routes/RootDrawer';
import { SocketContext, socket } from './context/socket.js';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home';
import SendOTP from './components/ForgetPassword/SendOTP';
import ConfirmOTP from './components/ForgetPassword/ConfirmOTP';
import ChangePassword from './components/ForgetPassword/ChangePassword';

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
						options={{ title: 'Home' , headerShown: false }}
					/>
					<Stack.Screen
						name="Drawer"
						component={RootDrawer}
						options={{ title: 'Drawer' , headerShown: false }}
					/>
					<Stack.Screen
						name="send_otp"
						component={SendOTP}
						options={{ headerShown: false }} 
					/>

						<Stack.Screen
						name="confirm_otp"
						component={ConfirmOTP}
						options={{ headerShown: false }} 
					/>

						<Stack.Screen
						name="change_password"
						component={ChangePassword}
						options={{ headerShown: false }} 
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</SocketContext.Provider>
	);
}
