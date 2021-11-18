import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import ActionBox from '../../components/ActionBox';

import GlobalStyles from '../../styles/GlobalStyles';
import DropoffForm from '../../components/InputForm/DropoffForm';

const EditDropoffDetailsScreen = ({ navigation, route }) => {
	const { id } = route.params;

	const [data, setData] = useState({
		contact_name: 'John Doe Smith',
		contact_phone: '+92 345 1234567',
		dropoff_name: 'AGH',
		dropoff_address: 'consectetur adipiscing elit',
		dropoff_map: 'https://maps.app.goo.gl/vvAkDEKa4dVSoM3P7',
		people_count: '40',
		description:
			'consectetur adipiscing elit consectetur adipiscing elit. consectetur adipiscing elit.',
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

			<DropoffForm data={data} verify={isSubmitPressed} onSubmit={onSubmit} />

			<View style={{ marginTop: 8 }}>
				<ActionBox
					type='primary'
					title='Update Dropoff'
					action={() => setSubmitPressed(true)}
				/>
				<ActionBox title='Cancel' action={navigation.goBack} />
			</View>
		</ScrollView>
	);
};

export default EditDropoffDetailsScreen;
