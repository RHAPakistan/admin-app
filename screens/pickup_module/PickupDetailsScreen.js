import React, { useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GlobalStyles from '../../styles/GlobalStyles';
import PickupDetails from '../../components/DetailsForm/PickupDetails';

const PickupDetailsScreen = ({ navigation, route }) => {
	const { id } = route.params;

	const [dropoff, setDropoff] = useState('');
	// Fetch Data from id Here
	const data = {
		BOOKING_TIME: '{TIME_DATE}',
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

	return (
		<View style={GlobalStyles.container}>
			<StatusBar style='dark' />

			{/* Show ProgressBar Here */}

			<PickupDetails data={data} />
		</View>
	);
};

export default PickupDetailsScreen;
