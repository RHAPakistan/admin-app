import React, { useEffect, useState, useContext } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ProgressBar from '../../components/ProgressBar';
import PickupDetails from '../../components/DetailsForm/PickupDetails';
import ActionBox from '../../components/ActionBox';
import { socket, SocketContext } from '../../context/socket';
import GlobalStyles from '../../styles/GlobalStyles';

const processingScreen = ({ navigation, route }) => {
	const socket = useContext(SocketContext);
	useEffect(()=>{
		socket.on("finishPickup",(socket_data)=>{
			console.log("pickup finished");
			//navigate to completed state.
            navigation.navigate("CompletedScreen");

		})
	},[])

	return (
		<ScrollView contentContainerStyle={GlobalStyles.container}>
			<StatusBar style='dark' />

			<View style={{ flex: 1 }}>
					<ProgressBar active={5} message='This is step 6.' />
				</View>
            <Text>Waiting for volunteer to finish</Text>
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

export default processingScreen;
