import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../styles/Colors';

const PrimaryHeader = (navigation, title) => {
	const MenuButton = () => {
		return (
			<TouchableOpacity
				style={styles.headerButton}
				onPress={() => navigation.openDrawer()}>
				<Ionicons name='menu' size={30} color={Colors.white} />
			</TouchableOpacity>
		);
	};
	const BellButton = () => {
		return (
			<TouchableOpacity
				style={styles.headerButton}
				onPress={() => navigation.push('NotificationScreen')}>
				<Ionicons name='notifications' size={24} color={Colors.white} />
			</TouchableOpacity>
		);
	};

	return {
		title: title,
		headerLeft: () => <MenuButton />,
		headerRight: () => <BellButton />,
		headerStyle: {
			backgroundColor: Colors.green,
		},
		headerTitleStyle: {
			color: Colors.white,
		},
	};
};

const styles = StyleSheet.create({
	headerButton: {
		height: 56,
		width: 56,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default PrimaryHeader;
