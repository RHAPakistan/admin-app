import React from 'react';
import { Button, LogBox, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GlobalStyles from '../../styles/GlobalStyles';

const SelectDropoffScreen = ({ navigation, route }) => {
	const { dropoff, setDropoff } = route.params;
	LogBox.ignoreLogs([
		'Non-serializable values were found in the navigation state',
	]);

	return (
		<ScrollView style={GlobalStyles.container}>
			<StatusBar style='dark' />

			<Text>This is Assign Dropoff Screen</Text>
			<Text>{dropoff.name}</Text>

			<Button
				title='Assign'
				onPress={() => {
					setDropoff({
						name: Math.random() * 10000 + '',
						id: Math.random() * 10000 + '',
					});
					navigation.goBack();
				}}
			/>
		</ScrollView>
	);
};

export default SelectDropoffScreen;
