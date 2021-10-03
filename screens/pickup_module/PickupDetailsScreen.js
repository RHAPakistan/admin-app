import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ProgressBar from '../../components/ProgressBar';
import PickupDetails from '../../components/DetailsForm/PickupDetails';
import ActionBox from '../../components/ActionBox';

import GlobalStyles from '../../styles/GlobalStyles';

const PickupDetailsScreen = ({ navigation, route }) => {
	const { id } = route.params;

	let removeProgressBar = false;

	const [dropoff, setDropoff] = useState({ name: '{DROPOFF_LOC}', id: '' });
	const [volunteer, setVolunteer] = useState({
		name: '{VOLUNTEER_NAME}',
		id: '',
	});

	const [dropoff, setDropoff] = useState({ name: '', id: '' });
	// Fetch Data from id Here
	const data = {
		BOOKING_TIME: '{TIME_DATE}',
		// COMPLETION_TIME: '{COMPLETION_TIME}',
		// CANCELLATION_TIME: '{CANCELLATION_TIME}',
		CONTACT_NAME: '{CONTACT_NAME}',
		CONTACT_PHONE: '{CONTACT_PHONE}',
		PROVIDER: {
			type: 'Registered',
			name: '{PROVIDER_NAME}',
			action: () => console.log('Provider Button Pressed'),
		},
		PICKUP_LOCATION: () => console.log('Pickup Location Button Pressed'),
		SURPLUS_TYPE: '{SURPLUS_TYPE}',
		DESCRIPTION:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		DROPOFF_LOC: {
			value: dropoff.name,
			action: () =>
				navigation.navigate('SelectDropoffScreen', { dropoff, setDropoff }),
		},
		VOLUNTEER: {
			value: volunteer.name,
			action: () =>
				navigation.navigate('SelectVolunteerScreen', {
					volunteer,
					setVolunteer,
				}),
		},
	};

	if (data.CANCELLATION_TIME || data.COMPLETION_TIME) {
		removeProgressBar = true;
	}

	return (
		<ScrollView style={GlobalStyles.container}>
			<StatusBar style='dark' />

			{!removeProgressBar && (
				<ProgressBar active={4} message='This is step four.' />
			)}

			<PickupDetails data={data} />

			<ActionBox
				type='primary'
				title='Proceed'
				action={() => console.log('Proceed Button Clicked')}
			/>

			{/* When Cancelling, a modal should appear to ask if admin really wants to cancel the pickup */}
			<ActionBox
				type='cancel'
				title='Cancel Pickup'
				action={() => console.log('Cancel Button Clicked')}
			/>
		</ScrollView>
	);
};

export default PickupDetailsScreen;
