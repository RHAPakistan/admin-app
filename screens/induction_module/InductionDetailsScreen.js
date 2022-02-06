import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';

import GlobalStyles from '../../styles/GlobalStyles';
import InductionDetails from '../../components/DetailsForm/InductionDetails';
import ActionBox from '../../components/ActionBox';

const InductionDetailsScreen = ({ navigation, route }) => {
	const { id } = route.params;

	const data = {
		account_creation: 'September 14, 2021 8:32 PM',
		name: 'John Doe Smith',
		cnic: '12345-1234567-1',
		birth_date: 'May 10, 1997',
		address: 'House M, XYZ Street, ABC Town',
		phone: '+92 345 1234567',
		email: 'email@example.com',
		workplace: 'XYZ Corp, Karachi',
		facebook: 'link to facebook',
		emergency_contact: '+92 300 1234567',
		emergency_relation: 'Elder Brother',
		conditions: 'Aesthema',
		vaccinated: 'Yes',
		pickups_delivered: 38,
		pickups_cancelled: 3,
		time_spent: '29h 14m',
	};

	return (
		<ScrollView contentContainerStyle={GlobalStyles.container}>
			<StatusBar style='dark' />

			<View style={{ flex: 1 }}>
				<InductionDetails data={data} />

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
	);
};

export default InductionDetailsScreen;
