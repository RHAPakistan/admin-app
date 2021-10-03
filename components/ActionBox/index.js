import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';

const ActionBox = ({ action, type, title }) => {
	let buttonStyles =
		type === 'primary' ? styles.primaryButton : styles.cancelButton;

	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={action}>
				<View style={buttonStyles}>
					<Text style={styles.buttonTitle}>{title}</Text>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};

export default ActionBox;
