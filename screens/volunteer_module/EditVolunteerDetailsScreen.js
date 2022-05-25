import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text } from 'react-native';

import GlobalStyles from '../../styles/GlobalStyles';

const EditVolunteerDetailsScreen = ({ navigation, route }) => {

	return (
		<ScrollView contentContainerStyle={GlobalStyles.container}>
			<StatusBar style='dark' />
			<Text>Under construction! You may deactivate this user and create a new one</Text>
		</ScrollView>
	);
};

export default EditVolunteerDetailsScreen;
