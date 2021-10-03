import React from 'react';
import { Button, LogBox, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GlobalStyles from '../../styles/GlobalStyles';

const SelectVolunteerScreen = ({ navigation, route }) => {
	const { volunteer, setVolunteer } = route.params;
	LogBox.ignoreLogs([
		'Non-serializable values were found in the navigation state',
	]);

	return (
		<ScrollView style={GlobalStyles.container}>
			<StatusBar style='dark' />

			<Text>This is Assign Volunteer Screen</Text>
			<Text>{volunteer.name}</Text>

			<Button
				title='Assign'
				onPress={() => {
					setVolunteer({
						name: Math.random() * 10000 + '',
						id: Math.random() * 10000 + '',
					});
					navigation.goBack();
				}}
			/>
		</ScrollView>
	);
};

export default SelectVolunteerScreen;
