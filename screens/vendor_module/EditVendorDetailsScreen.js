import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text } from 'react-native';

import GlobalStyles from '../../styles/GlobalStyles';

const EditVendorDetailsScreen = ({ navigation, route }) => {

	return (
		<ScrollView contentContainerStyle={GlobalStyles.container}>
			<StatusBar style='dark' />

			<Text>Under construction! You may deactivate this provider and create a new one</Text>
			
		</ScrollView>
	);
};

export default EditVendorDetailsScreen;
