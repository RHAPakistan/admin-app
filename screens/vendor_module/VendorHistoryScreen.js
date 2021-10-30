import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text } from 'react-native';

import GlobalStyles from '../../styles/GlobalStyles';

const VendorHistoryScreen = ({ navigation, route }) => {
	const { id } = route.params;
	return (
		<ScrollView style={GlobalStyles.container}>
			<StatusBar style='dark' />

			<Text>This is VendorHistoryScreen</Text>
		</ScrollView>
	);
};

export default VendorHistoryScreen;
