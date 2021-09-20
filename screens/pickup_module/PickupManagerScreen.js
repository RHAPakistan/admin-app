import React, { useState } from 'react';
import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import SelectOptions from '../../components/SelectOptions';

import GlobalStyles from '../../styles/GlobalStyles';
import Colors from '../../styles/Colors';
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
			<PickupList
				status={status}
				dismissed={dismissed}
				clearDismissed={() => setDismissed(false)}
				action={(key) =>
					navigation.navigate('PickupDetailsScreen', { key: key })
				}
			/>
		</ScrollView>
	);
};

export default PickupManagerScreen;
