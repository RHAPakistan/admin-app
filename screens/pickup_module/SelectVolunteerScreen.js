import React, { useState, useEffect } from 'react';
import { Button, LogBox, ScrollView, Text, View, FlatList, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { StatusBar } from 'expo-status-bar';
const adminApi = require("../../helpers/adminApi");
import GlobalStyles from '../../styles/GlobalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../../components/ButtonList/styles.js';
import VolunteerButton from '../../components/ButtonList/VolunteerList/VolunteerButton';
import VolunteerList from '../../components/ButtonList/VolunteerList';
import SliderNativeComponent from 'react-native/Libraries/Components/Slider/SliderNativeComponent';
// import { SafeAreaView } from 'react-native-web';

const SelectVolunteerScreen = ({ navigation, route }) => {
	const { volunteer, setVolunteer, setProgressCount,pickupCoordinates } = route.params;
	const [volunteersList, setVolunteersList] = useState([]);
	const [volunteerSelected, setVolunteerSelected] = useState("");
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
