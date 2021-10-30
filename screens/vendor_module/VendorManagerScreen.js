import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text } from 'react-native';

import GlobalStyles from '../../styles/GlobalStyles';

const VendorManagerScreen = ({ navigation }) => {
	return (
		<ScrollView style={GlobalStyles.container}>
			<StatusBar style='dark' />

			<Text>This is VendorManagerScreen</Text>
		</ScrollView>
	);
};

export default VendorManagerScreen;
