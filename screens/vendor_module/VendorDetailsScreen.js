import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';

import GlobalStyles from '../../styles/GlobalStyles';
import VendorDetails from '../../components/DetailsForm/VendorDetails';
import ActionBox from '../../components/ActionBox';

const VendorDetailsScreen = ({ navigation, route }) => {
	const { id } = route.params;

	const data = {
		contact_name: 'John Doe Smith',
		contact_phone: '+92 345 1234567',
		contact_email: 'email@example.com',
		creation_date: 'September 14, 2021 8:32 PM',
		last_modified: 'September 14, 2021 8:32 PM',
		business_name: 'Student Biryani, Branch 2',
		business_address: 'consectetur adipiscing elit',
		business_map: 'https://maps.app.goo.gl/vvAkDEKa4dVSoM3P7',
		total_pickups: 32,
		last_pickup: 'November 14, 2021 8:32 PM',
	};

	return (
		<ScrollView contentContainerStyle={GlobalStyles.container}>
			<StatusBar style='dark' />

			<View style={{ flex: 1 }}>
				<VendorDetails data={data} />

				<ActionBox
					type='primary'
					title='Pickup History'
					action={() => navigation.navigate('VendorHistoryScreen', { id: id })}
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

export default VendorDetailsScreen;
