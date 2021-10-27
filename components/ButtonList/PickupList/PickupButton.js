import React from 'react';
import { Text, Pressable, View } from 'react-native';
import styles from '../styles';

const PickupButton = ({ data, action, isActive }) => {
	const activeStyles = {
		Button: isActive ? styles.activeButton : null,
		ButtonTitle: isActive ? styles.activeButtonTitle : styles.buttonTitleText,
		ButtonInfo: isActive ? styles.activeButtonInfo : styles.buttonInfoText,
	};
	return (
		<Pressable onPress={action} style={[styles.button, activeStyles.Button]}>
			<View style={styles.buttonHeader}>
				<Text style={activeStyles.ButtonTitle}>#{data.id}</Text>
				<Text style={activeStyles.ButtonInfo}>{data.time}</Text>
			</View>

			<View style={styles.buttonHeader}>
				<Text style={activeStyles.ButtonInfo}>{data.address}</Text>
			</View>
		</Pressable>
	);
};

export default PickupButton;
