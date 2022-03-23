import React, { useEffect, useState, useContext } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ProgressBar from '../../components/ProgressBar';
import PickupDetailsFixed from '../../components/DetailsForm/PickupDetailsFixed';
import ActionBox from '../../components/ActionBox';
import { socket, SocketContext } from '../../context/socket';
import GlobalStyles from '../../styles/GlobalStyles';

const CompletedScreen = ({ navigation, route }) => {
	const socket = useContext(SocketContext);
	const pickup = route.params.pickup;
	const current_provider = route.params.provider;
	const volunteer = route.params.volunteer;
	useEffect(() => {
		socket.on("finishPickup", (socket_data) => {
			console.log("pickup finished");
			//navigate to completed state.

		})
	}, [])
	const data = {
		BOOKING_TIME: pickup.placementTime,
		// COMPLETION_TIME: '{COMPLETION_TIME}',
		// CANCELLATION_TIME: '{CANCELLATION_TIME}',
		CONTACT_NAME: current_provider.fullName,
		CONTACT_PHONE: current_provider.contactNumber,
		PROVIDER: {
			type: 'Registered',
			name: current_provider.fullName,
			action: () => console.log('Provider Button Pressed'),
		},
		PICKUP_LOCATION: pickup.pickupAddress,
		SURPLUS_TYPE: pickup.typeOfFood,
		DESCRIPTION:
			pickup.description,
		DROPOFF_LOC: {
			value: pickup.deliveryAddress,
			action: () =>
				navigation.navigate('SelectDropoffScreen', { dropoff, setDropoff, setProgressCount }),
		},
		VOLUNTEER: {
			value: volunteer.fullName,
			action: () =>
				navigation.navigate('SelectVolunteerScreen', {
					volunteer,
					setVolunteer,
					setProgressCount
				}),
		},
	};
	return (
		<ScrollView contentContainerStyle={GlobalStyles.container}>
			<StatusBar style='dark' />

			<ProgressBar active={6} message='Pickup Completed!!' />
			<PickupDetailsFixed data={data} />
			<View style={{ marginTop: 32 }}>
				{/* When Cancelling, a modal should appear to ask if admin really wants to cancel the pickup */}
				<ActionBox
					type='cancel'
					title='Cancel Pickup'
					action={() => console.log('Cancel Button Clicked')}
				/>
			</View>
		</ScrollView>
	);
};

export default CompletedScreen;
