import React from 'react';
import { Text, View } from 'react-native';

import GlobalStyles from '../styles/GlobalStyles';

const NotificationScreen = ({ navigation }) => {
	return (
		<View style={GlobalStyles.container}>
			<Text>This is Notification Screen</Text>
		</View>
	);
};

export default NotificationScreen;
