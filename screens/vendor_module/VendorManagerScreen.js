import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	Keyboard,
	ScrollView,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import Search from '../../components/ManagerOptions/Search';

import GlobalStyles from '../../styles/GlobalStyles';

const VendorManagerScreen = ({ navigation }) => {
	const onSubmit = (query) => {
		// on submit, fetch data based on search query
		console.log(query);
	};

	return (
		<ScrollView style={GlobalStyles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View>
					<StatusBar style='dark' />
					<View style={GlobalStyles.screenTitle}>
						<Text style={GlobalStyles.screenTitleText}>Vendor Manager</Text>
					</View>

					<Search onSubmit={onSubmit} placeholder='Search Vendor' />
				</View>
			</TouchableWithoutFeedback>
		</ScrollView>
	);
};

export default VendorManagerScreen;
