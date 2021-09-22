import React, { useState } from 'react';
import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import SelectOptions from '../../components/SelectOptions';

import GlobalStyles from '../../styles/GlobalStyles';
import PickupList from '../../components/PickupList';

const PickupManagerScreen = ({ navigation }) => {
	const [status, setStatus] = useState([]);
	const [dismissed, setDismissed] = useState(false);

	return (
		<ScrollView style={GlobalStyles.container}>
			<TouchableWithoutFeedback onPress={() => setDismissed(true)}>
				<View>
					<StatusBar style='light' />

					<View style={GlobalStyles.screenTitle}>
						<Text style={GlobalStyles.screenTitleText}>Pickup Manager</Text>
					</View>

					<SelectOptions
						setValue={setStatus}
						label='Status'
						data={['Egypt', 'Canada', 'Australia', 'Ireland']}
					/>
				</View>
			</TouchableWithoutFeedback>

			{/* List Functionality */}
			<PickupList
				{...{
					action: (id) => {
						// navigation.navigate('PickupDetailsScreen', { id: id })
						console.log(id, 'pressed');
					},
					clearDismissed: () => {
						setDismissed(false);
					},
					dismissed,
					status,
				}}
			/>
		</ScrollView>
	);
};

export default PickupManagerScreen;
