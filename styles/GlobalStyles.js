import React from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import Colors from './Colors';

const GlobalStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.ashWhite,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},

	bgGreen: {
		backgroundColor: Colors.green,
	},
});

export default GlobalStyles;
