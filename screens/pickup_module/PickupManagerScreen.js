import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { DismissedWrap } from '../../contexts/DismissedContext';
import SelectOptions from '../../components/SelectOptions';

import GlobalStyles from '../../styles/GlobalStyles';
import PickupList from '../../components/PickupList';

const PickupManagerScreen = ({ navigation }) => {
	const [status, setStatus] = useState([]);

	return (
		<ScrollView style={GlobalStyles.container}>
			<DismissedWrap>
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
			</DismissedWrap>
			<PickupList
				status={status}
				action={(id) =>
					// navigation.navigate('PickupDetailsScreen', { key: key })
					console.log(id, 'pressed')
				}
			/>
		</ScrollView>
	);
};

export default PickupManagerScreen;
