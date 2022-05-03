import React, { useState, useEffect } from 'react';
import { Button, LogBox, ScrollView, Text, View, FlatList, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
const adminApi = require("../../helpers/adminApi");
import VolunteerList from '../../components/ButtonList/VolunteerList';

const SelectVolunteerScreen = ({ navigation, route }) => {
	let {data} = route.params;
	const [volunteersList, setVolunteersList] = useState([]);
	const add_volunteer = async(id)=>{
		data.volunteers_SignedUp.push(id);
		data.currentCount = data.currentCount + 1;
		console.log("The data is: ",data);
		const resp = await adminApi.update_drive(data._id, data);
		return resp;
	}
	useEffect(()=>{
		const fetchData = async() =>{
			const resp = await adminApi.get_unenrolled_drive_volunteers(data._id);
			return resp;
		}
		fetchData()
		.then((response)=>{
			console.log("Response: ",response);
			if(response.error == 0)
				setVolunteersList(response.volunteers);
			else
				alert(response.message);
		})
		.catch((e)=>{
			console.log(e);
		})
	},[])
	LogBox.ignoreLogs([
		'Non-serializable values were found in the navigation state',
	]);

	const onPressVolunteer = (item)=>{
		Alert.alert(
			"Add volunteer",
			"Do you want to add this volunteer to the drive?",
			[
				{
					text:"Yes",
					onPress: ()=>{
						add_volunteer(item._id)
						.then((response)=>{
							console.log("The response after adding: ",response);
							if(response){
								console.log("The response after removing a person from drive: ",response);
							}
							else{
								alert("Volunteer couldn't be removed");
							}
						})
						.catch((e)=>{
							console.log("Error: ",e)
							alert(`Error: ${e.message}`)
						})
						navigation.goBack();
					}
				},
				{
					text: "No, Go back",
					onPress: () => {
						console.log("go back pressed");
					}
				}
			]
		)
	}
	return (
		<ScrollView style={{flex:1}}>
			<StatusBar style='dark' />
			<VolunteerList data={volunteersList} onPress = {onPressVolunteer} />
		</ScrollView>
	);
};

export default SelectVolunteerScreen;
