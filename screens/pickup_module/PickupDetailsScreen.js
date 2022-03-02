import React, { useState, useContext } from 'react';
import { LogBox, ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ProgressBar from '../../components/ProgressBar';
import PickupDetails from '../../components/DetailsForm/PickupDetails';
import ActionBox from '../../components/ActionBox';
import { socket, SocketContext } from '../../context/socket';
import GlobalStyles from '../../styles/GlobalStyles';
import * as SecureStore from 'expo-secure-store';
const localStorage = require("../../helpers/localStorage");
const adminApi = require("../../helpers/adminApi");

const PickupDetailsScreen = ({ navigation, route }) => {
	const socket = useContext(SocketContext);
	var currentPickup = route.params.id;
	LogBox.ignoreLogs([
		'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.',
	]);
	// console.log("=====");
	// console.log(route.params);
	let removeProgressBar = false;

	const [dropoff, setDropoff] = useState({ name: 'none', id: '' });
	const [volunteer, setVolunteer] = useState({"fullName":"none"});
	const [progressCount, setProgressCount] = useState(1);

	// Fetch Data from id Here

	// Process Data Here

	const data = {
		BOOKING_TIME: currentPickup.placementTime,
		// COMPLETION_TIME: '{COMPLETION_TIME}',
		// CANCELLATION_TIME: '{CANCELLATION_TIME}',
		CONTACT_NAME: currentPickup._id,
		CONTACT_PHONE: currentPickup.provieder_phone,
		PROVIDER: {
			type: 'Registered',
			name: "",
			action: () => console.log('Provider Button Pressed'),
		},
		PICKUP_LOCATION: () => console.log(currentPickup.pickupAddress),
		SURPLUS_TYPE: currentPickup.typeOfFood,
		DESCRIPTION:
			currentPickup.description,
		DROPOFF_LOC: {
			value: dropoff.name,
			action: () =>
				navigation.navigate('SelectDropoffScreen', { dropoff, setDropoff, setProgressCount}),
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

	if (data.CANCELLATION_TIME || data.COMPLETION_TIME) {
		removeProgressBar = true;
	}

	const proceed = async()=>{
		
		//add admin and volunteer field to the currentPickup
		currentPickup.admin = await localStorage.getData("user_id");
		//change the status of the pickup to 1 (assigned)
		currentPickup.status = 1
		currentPickup.deliveryAddress = dropoff.name;
		console.log("Volunteer at pickupDetailsScreen:71 ", volunteer);
		if(volunteer.fullName != "none"){
			currentPickup.volunteer = volunteer._id;
			currentPickup.broadcast=false
		}
		else{
			console.log("broadcast=true");
			currentPickup.broadcast=true
		}

		//incase volunteer or dropoff is not assigned then don't proceed
		if (currentPickup.deliveryAddress=="none" ||  currentPickup.volunteer=="none"){
			alert("Please assign dropoff and volunteer both");
		} else{
		//send a notification to the assigned volutneer through the socket
		// socket.emit("assignPickup",{"pickup":currentPickup, "volunteer":volunteer});
		socket.emit("assignPickup",{"message":currentPickup});
		navigation.navigate("AwaitVolunteerScreen");
		}
	}

	return (
		<ScrollView contentContainerStyle={GlobalStyles.container}>
			<StatusBar style='dark' />

			<View style={{ flex: 1 }}>
				{!removeProgressBar && (
					<ProgressBar active={progressCount} message='This is step one.' />
				)}
				<PickupDetails data={data} />
				<ActionBox
					type='primary'
					title='Proceed'
					action={proceed}
				/>
			</View>

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

export default PickupDetailsScreen;
