import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Alert } from 'react-native';

import GlobalStyles from '../../styles/GlobalStyles';
import VolunteerDetails from '../../components/DetailsForm/VolunteerDetails';
import ActionBox from '../../components/ActionBox';
import adminApi from "../../helpers/adminApi";
const VolunteerDetailsScreen = ({ navigation, route }) => {
	const { id } = route.params;
	const onClickDeactiviate = async()=>{
	
		Alert.alert(
			"Delete Provider",
			"Are you sure you want to delete this provider?",
			[
				{
					text:"Yes",
					onPress: ()=>{
						const deleteprov = async()=> await adminApi.delete_volunteer(id._id);
						deleteprov()
						.then((response)=>{
							if(response){
								navigation.goBack()
							}
							else{
								alert("Volunteer couldn't be deleted");
							}
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

				<ActionBox
					type='primary'
					title='Pickup History'
					action={() =>
						navigation.navigate('VolunteerHistoryScreen', {id: id })
					}
				/>
			</View>

			<View>
				{/* When Cancelling or deactivating, a modal should appear to ask if admin really wants to cancel the pickup */}
				<ActionBox
					type='cancel'
					title='Deactivate Account'
					action={onClickDeactiviate}
				/>
			</View>
		</ScrollView>
		</View>
	);
};

export default VolunteerDetailsScreen;
