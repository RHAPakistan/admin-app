import React from 'react';
import { Button, Text, View } from 'react-native';

import GlobalStyles from '../../styles/GlobalStyles';

const PickupManagerScreen = ({ navigation }) => {
	return (
		<View style={GlobalStyles.container}>
			<Text>This is Pickup Manager Screen</Text>
			<Button
				title='Pickup Details'
				onPress={() => navigation.push('PickupDetailsScreen')}
			/>
		</View>
	);
};

export default PickupManagerScreen;
