import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../styles/Colors';

const PrimaryHeader = (navigation, title) => {
	const MenuButton = () => {
		return (
			<Pressable
				style={styles.headerButton}
				onPress={() => navigation.openDrawer()}>
				<Ionicons name='menu' size={30} color={Colors.white} />
			</Pressable>
		);
	};
	const BellButton = () => {
		return (
			<Pressable
				style={styles.headerButton}
				onPress={() => navigation.push('NotificationScreen')}>
				<Ionicons name='notifications' size={24} color={Colors.white} />
			</Pressable>
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
