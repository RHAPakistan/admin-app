import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GlobalStyles from '../../styles/GlobalStyles';

const DriveParticipantsScreen = ({ navigation,route }) => {
	return (
		<View style={GlobalStyles.container}>
		<StatusBar style='dark' />
			<Text>This is Drive Participants Screen</Text>
		</View>
	);
};

export default DriveParticipantsScreen;
