import React, { useState } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import SelectOptions from '../../components/SelectOptions';

import GlobalStyles from '../../styles/GlobalStyles';
import Colors from '../../styles/Colors';

const PickupManagerScreen = ({ navigation }) => {
	const [status, setStatus] = useState([]);
	return (
		<View style={GlobalStyles.container}>
			<StatusBar style='light' />

			<View style={GlobalStyles.screenTitle}>
				<Text style={GlobalStyles.screenTitleText}>Pickup Manager</Text>
			</View>

			<SelectOptions
				setValue={setStatus}
				label='Status'
				data={['Egypt', 'Canada', 'Australia', 'Ireland']}
			/>
		</View>
	);
};

export default PickupManagerScreen;
