import React, { useState, useEffect } from 'react';
import { LogBox, ScrollView, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
const adminApi = require("../../helpers/adminApi");
import VolunteerList from '../../components/ButtonList/VolunteerList';

const SelectVolunteerScreen = ({ navigation, route }) => {
	const { volunteer, setVolunteer, setProgressCount,pickupCoordinates } = route.params;
	const [volunteersList, setVolunteersList] = useState([]);
	useEffect(()=>{
		const fetchData = async() =>{
			const resp = await adminApi.get_volunteers_by_distance(pickupCoordinates);
			return resp.message;
		}
		fetchData()
		.then((response)=>{
			console.log(response);
			setVolunteersList(response);
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
			"Assign pickup",
			"Do you want to assign the pickup to this volunteer",
			[
				{
					text:"Yes",
					onPress: ()=>{
						setVolunteer(item);
						// setProgressCount((prevState)=>{return prevState+1});
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
