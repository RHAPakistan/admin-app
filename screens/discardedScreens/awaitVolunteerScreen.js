import React, { useEffect, useState, useContext } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ProgressBar from '../../components/ProgressBar';
import PickupDetails from '../../components/DetailsForm/PickupDetails';
import PickupDetailsFixed from '../../components/DetailsForm/PickupDetailsFixed';
import ActionBox from '../../components/ActionBox';
import { socket, SocketContext } from '../../context/socket';
import GlobalStyles from '../../styles/GlobalStyles';
import adminApi from "../../helpers/adminApi";


const awaitVolunteerScreen = ({ navigation, route }) => {
	const socket = useContext(SocketContext);
	const currentPickup = route.params.pickup;
	const [current_provider, setCurrentProvider] = useState({});
	const dropoff = {"name":route.params.pickup.deliveryAddress};
	const [volunteer, setVolunteer] = useState({});
	useEffect(() => {
		console.log("listening for volunteer's acceptance");
		// socket.on("acceptPickup", (socket_data) => {
		// 	console.log("pickup accepted");
		// 	//navigate to processing state.
		// 	navigation.navigate("ProcessingScreen", {"pickup": socket_data.message,"provider":socket_data.provider,"volunteer":socket_data.volunteer});
		// })

		const fetchData = async()=>{
			const vol_resp = route.params.pickup.volunteer?
			await adminApi.get_volunteers({"_id":route.params.pickup.volunteer})
			:
			{"fullName":"none"}
			const prov_resp = await adminApi.get_provider(route.params.pickup.provider)
			return [vol_resp, prov_resp];
		}
		fetchData()
		.then((response)=>{
			const [vol_resp, prov_resp] = response;
			setVolunteer(vol_resp);
			setCurrentProvider(prov_resp);
		})

	}, [])

	const data = {
		BOOKING_TIME: currentPickup.placementTime,
		// COMPLETION_TIME: '{COMPLETION_TIME}',
		// CANCELLATION_TIME: '{CANCELLATION_TIME}',
		CONTACT_NAME: current_provider.fullName,
		CONTACT_PHONE: current_provider.contactNumber,
		PROVIDER: {
			type: 'Registered',
			name: current_provider.fullName,
			action: () => console.log('Provider Button Pressed'),
		},
		PICKUP_LOCATION: currentPickup.pickupAddress,
		SURPLUS_TYPE: currentPickup.typeOfFood,
		DESCRIPTION:
			currentPickup.description,
		DROPOFF_LOC: {
			value: dropoff.name,
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

			<ProgressBar active={4} message='Waiting for volunteer.' />
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

export default awaitVolunteerScreen;
