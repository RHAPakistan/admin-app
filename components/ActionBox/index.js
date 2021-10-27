import React from 'react';
import { Text, Pressable, View } from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';

const ActionBox = ({ action, type, title }) => {
	let buttonStyles = [
		GlobalStyles.LargeButton,
		type === 'primary' ? GlobalStyles.bgGreen : GlobalStyles.bgRed,
	];

	return (
		<View style={{ alignItems: 'center', paddingVertical: 4 }}>
			<Pressable onPress={action} style={buttonStyles}>
				<Text style={GlobalStyles.LargeButtonTitle}>{title}</Text>
			</Pressable>
		</View>
	);
};

export default ActionBox;
