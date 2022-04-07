import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, TextInput, StyleSheet, Alert } from 'react-native';

import GlobalStyles from '../../styles/GlobalStyles';
import InductionDetails from '../../components/DetailsForm/InductionDetails';
import ActionBox from '../../components/ActionBox';
const adminApi = require("../../helpers/adminApi");

const InductionDetailsScreen = ({ navigation, route }) => {
	const { data } = route.params;
	const [isDisaprovedClicked, setIsDisaprovedClicked] = useState(false);
	const [rejectionReasons, setRejectionReasons] = useState("");
	const approveRequest = async ()=>{
		const res = await adminApi.approveInductionRequest(data._id, data.email);
		return res;
	}
	const disapproveRequest = async()=>{
		const res = await adminApi.disapproveInductionRequest(data._id, data.email, rejectionReasons);
		return res;
	}
	const approvedClicked = ()=>{
		console.log('Approve Button Clicked')
		Alert.alert(
			"Warning!",
			`Do you want to approve this volunteer?`,
			[
				{
					text:"Yes",
					onPress: () => {
						console.log("approve function called here");
						approveRequest()
						.then((response)=>{
							console.log("Response is: ",response);
							alert(response.message);
						})
						.catch((e)=>{
							console.log("Error: ",e);
							alert(e);
						})
						navigation.navigate("InductionManagerScreen");
					}
				},
				{
					text:"No",
					onPress: () => {console.log("No pressed")},
					style:"Cancel"
				}
			]
		)
	}
	const disapprovedClicked = ()=>{
		console.log('Disapprove Button Clicked')
		setIsDisaprovedClicked(true)
	}
	const submitClicked = ()=>{
		console.log('Submit Button Clicked')
		Alert.alert(
			"Warning!",
			`Do you want to disapprove this volunteer`,
			[
				{
					text:"Yes",
					onPress: () => {
						console.log("disapprove function called here");
						disapproveRequest()
						.then((response)=>{
							console.log("Response is: ",response);
							alert(response.message);
						})
						.catch((e)=>{
							console.log("Error: ",e);
							alert(e);
						})
						navigation.navigate("InductionManagerScreen");
					}
				},
				{
					text:"No",
					onPress: () => {console.log("No pressed")},
					style:"Cancel"
				}
			]
		)
	}
	const cancelClicked = ()=>{
		console.log('Cancel Button Clicked')
		setIsDisaprovedClicked(false)
	}
	return (
		<View style={GlobalStyles.container}>
			<ScrollView>
				<StatusBar style='dark' />

				<View style={{ flex: 1 }}>
					<InductionDetails data={data} />
				</View>
			{
				isDisaprovedClicked?
				<View>
					<TextInput
						multiline
						numberOfLines={3}
						value={rejectionReasons}
						onChangeText={text =>setRejectionReasons(text)}
						placeholder="Kindly provide reason(s) for rejecting this person"
						style={thisStyles.textBox}
					/>
					<ActionBox
						type='primary'
						title='Submit'
						action={() => submitClicked()}
					/>
					<ActionBox
						type='cancel'
						title='Cancel'
						action={() => cancelClicked()}
					/>
				</View>
				:
				<View>
					{/* When Approving or disapproving, a modal should appear to ask if admin really wants to cancel the pickup */}
					<ActionBox
						type='primary'
						title='Approve'
						action={() => approvedClicked()}
					/>
					<ActionBox
						type='cancel'
						title='Disapprove'
						action={() => disapprovedClicked()}
					/>
				</View>
			}
			</ScrollView>
		</View>
	);
};

const thisStyles = StyleSheet.create({
	textBox:{backgroundColor: 'white', borderColor: 'black', borderWidth: 1, maxWidth: '80%', borderRadius: 5, marginLeft: '10%', marginTop: '5%', textAlign: 'center'},

});
export default InductionDetailsScreen;
