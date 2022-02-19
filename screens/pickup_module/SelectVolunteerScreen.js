import React, { useState, useEffect } from 'react';
import { Button, LogBox, ScrollView, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { StatusBar } from 'expo-status-bar';
const adminApi = require("../../helpers/adminApi");
import GlobalStyles from '../../styles/GlobalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../../components/ButtonList/styles.js';
import VolunteerButton from '../../components/ButtonList/VolunteerList/VolunteerButton';
import VolunteerList from '../../components/ButtonList/VolunteerList';
// import { SafeAreaView } from 'react-native-web';

const SelectVolunteerScreen = ({ navigation, route }) => {
	const { volunteer, setVolunteer } = route.params;
	const [volunteersList, setVolunteersList] = useState([]);
	const [volunteerSelected, setVolunteerSelected] = useState("");
	useEffect(()=>{
		const fetchData = async() =>{
			const resp = await adminApi.get_volunteers();
			return resp;
		}
		fetchData()
		.then((response)=>{
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
		setVolunteerSelected(item);
	}
	return (
		<ScrollView style={{flex:1}}>
			<StatusBar style='dark' />
			<VolunteerList data={volunteersList} onPress = {onPressVolunteer} />
			<Button
				title='Assign'
				onPress={() => {
					setVolunteer(volunteerSelected);
					navigation.goBack();
				}}
			/>
		</ScrollView>
	);
};

export default SelectVolunteerScreen;
