import React,{useRef} from 'react';
import { ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ActionBox from '../../components/ActionBox';

import GlobalStyles from '../../styles/GlobalStyles';
import DriveForm from '../../components/InputForm/DriveFormV2';
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

	const formRef = useRef(0);

	const createDrive = async(data)=>{
		const resp = await adminApi.create_drive(data);
		return resp;
	}

	const onSubmitHandler = ()=>{
		if(formRef.current.validate()){
			const value = formRef.current.getValues()
			value['maxCount'] = Number(value.maxCount);
			
			createDrive(value)
			.then((response)=>{
				// console.log(response);
				alert("Successfully created drive")
				navigation.goBack();
			})
			.catch((e)=>{
				console.log(e);
			})
		}
	}

	return (
		<ScrollView contentContainerStyle={GlobalStyles.container}>
			<StatusBar style='dark' />

			{/* Input Form Here */}
			<DriveForm data={data} ref={formRef}/>
			<View style={{ marginTop: 8 }}>
				<ActionBox
					type='primary'
					title='Add Drive'
					action={onSubmitHandler}
				/>
				<ActionBox title='Cancel' action={navigation.goBack} />
			</View>
		</ScrollView>
	);
};

export default CreateDriveScreen;
