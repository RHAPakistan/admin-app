import React from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';

import GlobalStyles from '../../styles/GlobalStyles';
import Colors from '../../styles/Colors';

const PickupManagerScreen = ({ navigation }) => {
	return (
		<View style={GlobalStyles.container}>
			<StatusBar style='light' />

			<View style={GlobalStyles.screenTitle}>
				<Text style={GlobalStyles.screenTitleText}>Pickup Manager</Text>

				<TouchableOpacity style={GlobalStyles.screenTitleButton}>
					<Entypo name='plus' size={30} color={Colors.white} />
				</TouchableOpacity>
			</View>

			<Button
				title='Pickup Details'
				onPress={() => navigation.push('PickupDetailsScreen')}
			/>
		</View>
	);
};

export default PickupManagerScreen;
