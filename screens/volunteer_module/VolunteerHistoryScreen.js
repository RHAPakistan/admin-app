import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text } from 'react-native';

import GlobalStyles from '../../styles/GlobalStyles';

const VolunteerHistoryScreen = ({ navigation, route }) => {
	const { id } = route.params;
	return (
		<ScrollView contentContainerStyle={GlobalStyles.container}>
			<StatusBar style='dark' />

			<Text>This is VolunteerHistoryScreen</Text>
		</ScrollView>
	);
};

export default VolunteerHistoryScreen;
