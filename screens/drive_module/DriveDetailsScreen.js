import React, { useEffect, useState } from 'react';
import { ScrollView, View, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GlobalStyles from '../../styles/GlobalStyles';
import DriveDetails from '../../components/DetailsForm/DriveDetails';
import ActionBox from '../../components/ActionBox';
const adminApi = require("../../helpers/adminApi");

const DriveDetailsScreen = ({ navigation, route }) => {
	const [data, setData] = useState({});
	const [isActive, setIsActive] = useState(false);
	const [isInActive, setIsInActive] = useState(false);

	useEffect(()=>{
		setData(route.params.id);
		if(data.status == 1) setIsActive(true)
		if (data.status == 0) setIsInActive(true)
	},[data, isActive]);
	// Fetch Data From id
	// Process Data here
	const updateDrive = async(id, obj)=>{
		const resp = await adminApi.update_drive(id, obj);
		return resp;
	}

	async function updateStatus (text, status){
		console.log("Status", status)
		Alert.alert(
			"Warning!",
			`Do you want to ${text} this Drive`,
			[
				{
					text:"Yes",
					onPress: () => {
						var updatedData = data;
						updatedData['status'] = status;
						setData(updatedData);
						setIsActive(!isActive);
						updateDrive(data._id, data)
						.then((response)=>{
							//console.log(response);
							alert(`Sucessfully ${text} the Drive`)
							//navigation.navigate('DriveManagerScreen');
						})
						.catch((e)=>{
							console.log(e);
						})

					}
				},
				{
					text:"No",
					onPress: () => {console.log("No pressed")},
					style:"Cancel"
				}
			]
		)
	};

	return (
		<ScrollView contentContainerStyle={GlobalStyles.container}>
			<StatusBar style='dark' />

			{/* < */}
			<View style={{ flex: 1 }}>
				<DriveDetails data={data} />

				<ActionBox
					type='primary'
					title='See Participants'
					action={() =>
						navigation.navigate('DriveParticipantsScreen', { id: data._id })
					}
				/>
				{
					isActive ? 
					<ActionBox
						type='primary'
						title='Completed'
						action={() => updateStatus('Completed', 2)}
					/> :  isInActive ?
					<ActionBox
						type='primary'
						title='Activate'
						action={() => updateStatus('Activate', 1)}
					/> : <View></View>
				}
			</View>

			{
				isActive ?
				<View style={{ marginTop: 32 }}>
					{/* When Cancelling or deactivating, a modal should appear to ask if admin really wants to cancel the pickup */}
					<ActionBox
						type='cancel'
						title='Deactivate'
						action={() => updateStatus('Deactivate', 0)}
					/>

					<ActionBox
						type='cancel'
						title='Cancel'
						action={() => updateStatus('Cancel', -1)}
					/>
				</View>
				: <View></View>
			}
		</ScrollView>
	);
};

export default DriveDetailsScreen;
