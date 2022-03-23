import React, { useState } from 'react';
import { Button, LogBox, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GlobalStyles from '../../styles/GlobalStyles';
import { TextInput } from 'react-native-gesture-handler';
import {styles} from '../styles';
import ActionBox from '../../components/ActionBox';

const SelectDropoffScreen = ({ navigation, route }) => {
	const { dropoff, setDropoff, setProgressCount } = route.params;
	const [selectedDropOff, setSelectedDropOff] = useState("");
	const [dropoffLocation, setDropoffLocation] = useState("");
	LogBox.ignoreLogs([
		'Non-serializable values were found in the navigation state',
	]);

	const assignDropoff = ()=>{
		setDropoff({
			name: dropoffLocation,
			id: Math.random() * 10000 + ''
		});
		setProgressCount(2);
		navigation.goBack();
	}
	return (
		<ScrollView style={GlobalStyles.container}>
			<StatusBar style='dark' />
			<TextInput style={styles.textInput} placeholder='Type dropoff location' onChangeText={setDropoffLocation} />

			<ActionBox 
			type="primary"
			title="Assign Dropoff"
			action = {assignDropoff}
			/>
		</ScrollView>
	);
};

export default SelectDropoffScreen;
