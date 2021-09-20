import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';

const PickupButton = ({ item, action, isActive }) => {
	const activeStyles = {
		Button: isActive ? styles.activeButton : null,
		ButtonTitle: isActive ? styles.activeButtonTitle : styles.buttonTitleText,
		ButtonInfo: isActive ? styles.activeButtonInfo : styles.buttonInfoText,
	};
	return (
		<TouchableWithoutFeedback onPress={action}>
			<View style={[styles.button, activeStyles.Button]}>
				<View style={styles.buttonHeader}>
					<Text style={activeStyles.ButtonTitle}>#{item}</Text>
					<Text style={activeStyles.ButtonInfo}>2m ago</Text>
				</View>

				<View style={styles.buttonHeader}>
					<Text style={activeStyles.ButtonInfo}>Plot 21, XYZ Street</Text>
					<Text style={activeStyles.ButtonInfo}>21 July, 2021</Text>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default PickupButton;
