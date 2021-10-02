import React, { useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GlobalStyles from '../../styles/GlobalStyles';
import PickupDetails from '../../components/DetailsForm/PickupDetails';
import ProgressBar from '../../components/ProgressBar';

const PickupDetailsScreen = ({ navigation, route }) => {
	const { id } = route.params;
	let removeProgressBar = false;

	const [dropoff, setDropoff] = useState('');
	// Fetch Data from id Here
	const data = {
		BOOKING_TIME: '{TIME_DATE}',
		// COMPLETION_TIME: '{COMPLETION_TIME}',
		CANCELLATION_TIME: '{CANCELLATION_TIME}',
		CONTACT_NAME: '{CONTACT_NAME}',
		CONTACT_PHONE: () => console.log('Contact Button Pressed'),
		PICKUP_LOCATION: () => console.log('Pickup Location Button Pressed'),
		SURPLUS_TYPE: '{SURPLUS_TYPE}',
		DESCRIPTION:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		DROPOFF_LOC: {
			value: dropoff,
			action: () => {
				console.log('Dropoff Button Pressed');
				setDropoff('' + Math.random() * 100000);
			},
		},
	};

	if (data.CANCELLATION_TIME || data.COMPLETION_TIME) {
		removeProgressBar = true;
	}

	return (
		<View style={GlobalStyles.container}>
			<StatusBar style='dark' />

			{!removeProgressBar && (
				<ProgressBar active={4} message='This is step four.' />
			)}

			<PickupDetails data={data} />
		</View>
	);
};

export default PickupDetailsScreen;
