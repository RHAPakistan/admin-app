import React, { useState, useContext, useEffect } from 'react';
import { LogBox, ScrollView, View, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ProgressBar from '../../components/ProgressBar';
import PickupDetails from '../../components/DetailsForm/PickupDetails';
import ActionBox from '../../components/ActionBox';
import { socket, SocketContext } from '../../context/socket';
import GlobalStyles from '../../styles/GlobalStyles';
import * as SecureStore from 'expo-secure-store';
import PickupDetailsFixed from '../../components/DetailsForm/PickupDetailsFixed';
import InputModal from '../../components/inputModal';

const localStorage = require("../../helpers/localStorage");
const adminApi = require("../../helpers/adminApi");

const PickupDetailsScreen = ({ navigation, route }) => {
	const socket = useContext(SocketContext);
	const [currentPickup, setPickup] = useState(route.params.pickup);
	LogBox.ignoreLogs([
		'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.',
	]);
	// console.log("=====");
	// console.log(route.params);
	let removeProgressBar = false;

	const [dropoff, setDropoff] = useState({ name: 'none', id: '' });
	const [volunteer, setVolunteer] = useState("none");
	const [progressCount, setProgressCount] = useState(1);
	const [current_provider, setCurrentProvider] = useState({});
	const [dropoffModalVisible, setDropoffModalVisible] = useState(false);
	const [heading, setHeading] = useState("Waiting for volunteer to finish");
	// Fetch Data from id Here
	useEffect(()=>{

		const get_data = async()=>{
			var current_provider = await adminApi.get_provider(currentPickup.provider);
			var current_pickup = await adminApi.get_pickups({_id:currentPickup._id});
			return [current_pickup.pickups[0], current_provider];
		}
		get_data()
		.then((response)=>{
			const [current_pickup,current_provider] = response;
			//if current pickup not in database? handle this
			setCurrentProvider(current_provider);
			setPickup(current_pickup);
			if (currentPickup.status==1){
				setProgressCount(4);
				setHeading("Waiting for volunteer to pickup food");		
			}
			else if (currentPickup.status==2){
				setProgressCount(5);
				setHeading("Waiting for volunteer to finish pickup");
			}
			else if (currentPickup.status==3){
				setProgressCount(6);
				setHeading("Pickup Completed");
			}
			else if (currentPickup.status==4){
				setProgressCount(6);
				setHeading("Pickup Cancelled");
			}
		})
		.catch((e)=>{
			console.log(e);
		})

		socket.on("acceptPickup", (socket_data) => {
			console.log("pickup accepted");
			setProgressCount(5);
			setHeading("Waiting for volunteer to pickup food");
			console.log(socket_data.volunteer);
			setVolunteer(socket_data.volunteer.fullName);
			//navigate to processing state.
			// navigation.navigate("ProcessingScreen", {"pickup": socket_data.message,"provider":socket_data.provider,"volunteer":socket_data.volunteer});
		})
		socket.on("finishPickup", (socket_data) => {
			console.log("pickup finished");
			setPickup(socket_data.message);
			setCurrentProvider(socket_data.provider);
			setVolunteer(socket_data.volunteer.fullName);
			setHeading("Pickup Completed");
			setProgressCount(6);
			//navigate to completed state.
			// navigation.navigate("CompletedScreen", 
			// {"pickup": socket_data.message,"provider":socket_data.provider,
			// "volunteer":socket_data.volunteer});

		})
		socket.on("informCancelPickup", (socket_data)=>{
			console.log("Pickup cancelled on admin's side",socket_data);
			if(socket_data.role=="provider"){
			Alert.alert(
                "Pickup cancelled",
                "Go back to dashboard.",
                [
                    {
                        text:"Ok, go back to dashboard",
                        onPress: ()=>{navigation.navigate("PickupManagerScreen")}
                    }   
                ]
            )
			}
			if(socket_data.role=="volunteer" && socket_data.status==2){
				console.log("volunteer cancelled?");
				get_data()
				.then((response)=>{
					const [current_pickup,current_provider] = response;
					//if current pickup not in database? handle this
					setCurrentProvider(current_provider);
					setPickup(current_pickup);
					if (currentPickup.status==1){
						setProgressCount(4);
						setHeading("Waiting for volunteer");		
					}
					else if (currentPickup.status==2){
						setProgressCount(5);
						setHeading("Waiting for volunteer to finish pickup");
					}
					else if (currentPickup.status==3){
						setProgressCount(6);
						setHeading("Pickup Completed");
					}
				})
				.catch((e)=>{
					console.log(e);
				})
								
			}
		})

		return ()=>{
			socket.off("finishPickup");
			socket.off("acceptPickup");
			socket.off("informCancelPickup");
		}
	},[])
	
	// Process Data Here

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
			setDropoffModalVisible(!dropoffModalVisible)
			// navigation.navigate('SelectDropoffScreen', { dropoff, setDropoff, setProgressCount}),
		},
		VOLUNTEER: {
			value: volunteer,
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
		if(volunteer != "none"){
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
		setProgressCount(4);
		setHeading("Waiting for volunteer");
		// navigation.navigate("AwaitVolunteerScreen",{"pickup":currentPickup, "provider":current_provider, "dropoff":dropoff, "volunteer":volunteer});
		}
	}

	const assignDropoff = (props)=>{
		setDropoff({
			name: props,
			id: Math.random() * 10000 + ''
		});
		setProgressCount((prevstate)=>{
			return prevstate+1;
		});
		setDropoffModalVisible(!dropoffModalVisible);
	}

	return (
		<ScrollView contentContainerStyle={GlobalStyles.container}>
			<StatusBar style='dark' />
			<InputModal modalVisible={dropoffModalVisible} setModalVisible={setDropoffModalVisible} 
			 onPress={assignDropoff}/>
			<View >
				{!removeProgressBar && (
					<ProgressBar active={progressCount} message={heading} />
				)}
				{
					progressCount<4?
				<View>
				<PickupDetails data={data} />
				<ActionBox
					type='primary'
					title='Proceed'
					action={proceed}
				/>	
				</View>		
				:
				<PickupDetailsFixed data={data} />
				}

			</View>
			{
			progressCount<6?
			<View style={{ marginTop: 32 }}>
				{/* When Cancelling, a modal should appear to ask if admin really wants to cancel the pickup */}
				<ActionBox
					type='cancel'
					title='Cancel Pickup'
					action={() => console.log('Cancel Button Clicked')}
				/>
			</View>
			:
			<ActionBox
			type='primary'
			title='Go to Pickup Manager'
			action={() => navigation.navigate("PickupManagerScreen")}
			/>
			}
		</ScrollView>
	);
};

export default PickupDetailsScreen;
