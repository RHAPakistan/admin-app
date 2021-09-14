import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyles from '../styles/GlobalStyles';
import Colors from '../styles/Colors';

const PrimaryHeader = (navigation, title) => {
	const MenuButton = () => {
		return (
			<TouchableOpacity
				style={GlobalStyles.headerButton}
				onPress={() => navigation.openDrawer()}>
				<Ionicons name='menu' size={30} color={Colors.white} />
			</TouchableOpacity>
		);
	};
	const BellButton = () => {
		return (
			<TouchableOpacity
				style={GlobalStyles.headerButton}
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

export default PrimaryHeader;
