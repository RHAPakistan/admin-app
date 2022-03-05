import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import ActionBox from '../../components/ActionBox';

import GlobalStyles from '../../styles/GlobalStyles';
import VendorForm from '../../components/InputForm/VendorForm';

const CreateVendorScreen = ({ navigation }) => {
	const data = {
		contact_name: '',
		contact_phone: '',
		contact_email: '',
		business_name: '',
		business_address: '',
		business_map: '',
	};

	const [isSubmitPressed, setSubmitPressed] = useState(false);

	const onSubmit = (value) => {
		if (value) {
			// Submit Data Here
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
				<ActionBox title='Cancel' action={navigation.goBack} />
			</View>
		</ScrollView>
	);
};

export default CreateVendorScreen;
