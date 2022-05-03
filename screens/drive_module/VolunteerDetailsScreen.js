import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Alert } from 'react-native';

import GlobalStyles from '../../styles/GlobalStyles';
import VolunteerDetails from '../../components/DetailsForm/VolunteerDetails';
import ActionBox from '../../components/ActionBox';
import adminApi from "../../helpers/adminApi";
const VolunteerDetailsScreen = ({ navigation, route }) => {
	const { id, driveData } = route.params;

	const onClickRemove = async()=>{	
		Alert.alert(
			"Remove Volunteer from drive",
			"Are you sure you want to remove this volunteer from the drive?",
			[
				{
					text:"Yes",
					onPress: ()=>{
						let data = driveData;
						for( var i = 0; i < data.volunteers_SignedUp.length; i++){ 
    
							if ( data.volunteers_SignedUp[i] === id._id) { 						
								data.volunteers_SignedUp.splice(i, 1); 
								data.currentCount = data.currentCount - 1;
							}
						
						}
						console.log("Now the drive is: ",data);
						const removeVol = async()=> await adminApi.update_drive(data._id, data);
						removeVol()
						.then((response)=>{
							if(response){
								console.log("The response after removing a person from drive: ",response);
								navigation.goBack()
							}
							else{
								alert("Volunteer couldn't be removed");
							}
						})
						.catch((e)=>{
							console.log("Error: ",e)
							alert(`Error: ${e.message}`)
						})
					}
				},
				{
					text: "No",
					onPress: () =>{console.log("No pressed")}
				}
			]
		)
}

	return (
		<View style={GlobalStyles.container}>
			<ScrollView>
			<StatusBar style='dark' />

			<View style={{ flex: 1 }}>
				<VolunteerDetails data={id} />
			</View>

			<View>
				{/* When Cancelling or deactivating, a modal should appear to ask if admin really wants to cancel the pickup */}
				<ActionBox
					type='cancel'
					title='Remove from the Drive'
					action={onClickRemove}
				/>
			</View>
		</ScrollView>
		</View>
	);
};

export default VolunteerDetailsScreen;
