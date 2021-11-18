import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import ActionBox from '../../components/ActionBox';

import GlobalStyles from '../../styles/GlobalStyles';
import VendorForm from '../../components/InputForm/VendorForm';

const EditVendorDetailsScreen = ({ navigation, route }) => {
	const { id } = route.params;

	const [data, setData] = useState({
		contact_name: 'John Doe Smith',
		contact_phone: '+92 345 1234567',
		contact_email: 'email@example.com',
		business_name: 'Student Biryani, Branch 2',
		business_address: 'consectetur adipiscing elit',
		business_map: 'https://maps.app.goo.gl/vvAkDEKa4dVSoM3P7',
	});
	const [isSubmitPressed, setSubmitPressed] = useState(false);

	const onSubmit = (value) => {
		if (value) {
			// Submit Data Here
			setData(value);
			navigation.goBack();
		} else {
			setSubmitPressed(false);
		}
	};

	return (
		<ScrollView contentContainerStyle={GlobalStyles.container}>
			<StatusBar style='dark' />

			<VendorForm data={data} verify={isSubmitPressed} onSubmit={onSubmit} />

			<View style={{ marginTop: 8 }}>
				<ActionBox
					type='primary'
					title='Add Vendor'
					action={() => setSubmitPressed(true)}
				/>
				<ActionBox title='Cancel' action={() => navigation.goBack()} />
			</View>
		</ScrollView>
	);
};

export default EditVendorDetailsScreen;
