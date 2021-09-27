import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GlobalStyles from '../../styles/GlobalStyles';
import PickupDetails from '../../components/DetailsForm/PickupDetails';

const PickupDetailsScreen = ({ navigation, route }) => {
	const { id } = route.params;

	// Fetch Data from id Here
	const data = {
		BOOKING_TIME: '{TIME_DATE}',
		CONTACT_NAME: '{CONTACT_NAME}',
		CONTACT_PHONE: () => console.log('Contact Button Pressed'),
		PICKUP_LOCATION: () => console.log('Pickup Location Button Pressed'),
		SURPLUS_TYPE: '{SURPLUS_TYPE}',
		DESCRIPTION:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
