import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ActionBox from '../../components/ActionBox';

import GlobalStyles from '../../styles/GlobalStyles';
import DriveForm from '../../components/InputForm/DriveForm';
const adminApi = require("../../helpers/adminApi");
const CreateDriveScreen = ({ navigation }) => {
	const data = {
		date: "",
		meetupTime: "",
		departureTime: "",
		meetupPoint: "",
		driveLocation: "",
		volunteerCategory: "",
		maxCount: "",
		duration: "",
		description: ""
	};
	const [isSubmitPressed, setSubmitPressed] = useState(false);

	const createDrive = async(data)=>{
		const resp = await adminApi.create_drive(data);
		return resp;
	}

	const onSubmit = (value) => {
		if (value) {
			
			value['maxCount'] = Number(value.maxCount);
			//console.log("The submit value is: ",value);
			createDrive(value)
			.then((response)=>{
				console.log(response);
				alert("Successfully created drive")
			})
			.catch((e)=>{
				console.log(e);
				
			})
			navigation.goBack();
		} else {
			setSubmitPressed(false);
		}
	};

	return (
		<ScrollView contentContainerStyle={GlobalStyles.container}>
			<StatusBar style='dark' />

			{/* Input Form Here */}
			<DriveForm data={data} verify={isSubmitPressed} onSubmit={onSubmit} />
			<View style={{ marginTop: 8 }}>
				<ActionBox
					type='primary'
					title='Add Drive'
					action={() => setSubmitPressed(true)}
				/>
				<ActionBox title='Cancel' action={navigation.goBack} />
			</View>
		</ScrollView>
	);
};

export default CreateDriveScreen;
