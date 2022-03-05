import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';

import GlobalStyles from '../../styles/GlobalStyles';
import VolunteerDetails from '../../components/DetailsForm/VolunteerDetails';
import ActionBox from '../../components/ActionBox';

const VolunteerDetailsScreen = ({ navigation, route }) => {
	const { id } = route.params;

	const data = {
		account_creation: 'September 14, 2021 8:32 PM',
		name: id.fullName,
		cnic: id.cnic,
		birth_date: id.dateOfBirth,
		address: id.address,
		phone: id.contactNumber,
		email: id.email,
		workplace: "",
		pickups_delivered: "",
		pickups_cancelled: "",
		time_spent: "",
	};

	return (
		<View style={GlobalStyles.container}>
			<ScrollView>
			<StatusBar style='dark' />

			<View style={{ flex: 1 }}>
				<VolunteerDetails data={data} />

				<ActionBox
					type='primary'
					title='Pickup History'
					action={() =>
						navigation.navigate('VolunteerHistoryScreen', { id: id })
					}
				/>
			</View>

			<View>
				{/* When Cancelling or deactivating, a modal should appear to ask if admin really wants to cancel the pickup */}
				<ActionBox
					type='cancel'
					title='Deactivate Account'
					action={() => console.log('Deactivate Button Clicked')}
				/>
			</View>
		</ScrollView>
		</View>
	);
};

export default VolunteerDetailsScreen;
