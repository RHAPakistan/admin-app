import React, { useState } from 'react';
import { ScrollView, Text, Pressable, View, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Options from '../../components/ManagerOptions/Options';

import GlobalStyles from '../../styles/GlobalStyles';

const PickupManagerScreen = ({ navigation }) => {
	const onChange = (query) => {
		console.log('Pickup Status Changed', query);
	};
	return (
		<ScrollView style={GlobalStyles.container}>
			<Pressable onPress={Keyboard.dismiss}>
				<View>
					<StatusBar style='light' />

					<View style={GlobalStyles.screenTitle}>
						<Text style={GlobalStyles.screenTitleText}>Pickup Manager</Text>
					</View>

					<Options
						onChange={onChange}
						label='Status'
						data={['Egypt', 'Canada', 'Australia', 'Ireland']}
					/>
				</View>
			</Pressable>
		</ScrollView>
	);
};

export default PickupManagerScreen;
