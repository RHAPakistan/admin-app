import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ActionBox from '../../components/ActionBox';

import GlobalStyles from '../../styles/GlobalStyles';
import DriveForm from '../../components/InputForm/DriveForm';
const adminApi = require("../../helpers/adminApi");

const EditDriveDetailsScreen = ({ navigation, route }) => {
	const { id } = route.params;
	// Fetch Data From id
	// Process Data here
	var data = id;
	data["maxCount"] = String(data.maxCount);

	const [isSubmitPressed, setSubmitPressed] = useState(false);

	const editDrive = async(id, obj)=>{
		const resp = await adminApi.update_drive(id, obj);
		return resp;
	}
	const onSubmit = (value) => {
		if (value) {
			// Submit Data Here
			value['maxCount'] = Number(value.maxCount);
			//console.log("The submit value is: ",value);
			editDrive(data._id,value)
			.then((response)=>{
				//console.log(response);
				alert("Successfully updated drive")
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
					title='Edit Drive'
					action={() => setSubmitPressed(true)}
				/>
				<ActionBox title='Cancel' action={navigation.goBack} />
			</View>
		</ScrollView>
	);
};

export default EditDriveDetailsScreen;
