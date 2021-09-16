import React from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';

import GlobalStyles from '../../styles/GlobalStyles';
import Colors from '../../styles/Colors';

const DriveManagerScreen = ({ navigation }) => {
	return (
		<View style={GlobalStyles.container}>
			<StatusBar style='light' />

			<View style={GlobalStyles.screenTitle}>
				<Text style={GlobalStyles.screenTitleText}>Drive Manager</Text>

				<TouchableOpacity
					style={GlobalStyles.screenTitleButton}
					onPress={() => navigation.push('CreateDriveScreen')}>
					<Entypo name='plus' size={30} color={Colors.white} />
				</TouchableOpacity>
			</View>

			<Button
				title='Drive Details'
				onPress={() => navigation.push('DriveDetailsScreen')}
			/>
		</View>
	);
};

export default DriveManagerScreen;
