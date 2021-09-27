import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const ButtonLine = ({ label, title, action, index }) => {
	let nthChild = index % 2 == 0 ? styles.oddChild : styles.evenChild;
	return (
		<View style={[styles.Line, styles.ButtonLine, nthChild]}>
			<View>
				<Text style={styles.Label}>{label}:</Text>
			</View>
			<TouchableOpacity onPress={action}>
				<View style={styles.Button}>
					<Text style={styles.ButtonTitle}>{title}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default ButtonLine;
