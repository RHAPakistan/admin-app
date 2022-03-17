import React, { useState } from 'react';
import { Button, LogBox, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GlobalStyles from '../../styles/GlobalStyles';
import { TextInput } from 'react-native-gesture-handler';
import {styles} from '../styles';

const SelectDropoffScreen = ({ navigation, route }) => {
	const { dropoff, setDropoff, setProgressCount } = route.params;
	const [selectedDropOff, setSelectedDropOff] = useState("");
	const [dropoffLocation, setDropoffLocation] = useState("");
	LogBox.ignoreLogs([
		'Non-serializable values were found in the navigation state',
	]);
	return (
		<ScrollView style={GlobalStyles.container}>
			<StatusBar style='dark' />

			<Text>This is Assign Dropoff Screen</Text>
			<TextInput placeholder='Type dropoff location' onChangeText={setDropoffLocation} />

			<Button
				
				title='Assign'
				onPress={() => {
					setDropoff({
						name: dropoffLocation,
						id: Math.random() * 10000 + '',
					});
					setProgressCount(2);
					navigation.goBack();
				}}
			/>
		</ScrollView>
	);
};

export default SelectDropoffScreen;
