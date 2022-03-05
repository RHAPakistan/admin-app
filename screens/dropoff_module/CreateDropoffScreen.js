import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import ActionBox from '../../components/ActionBox';

import GlobalStyles from '../../styles/GlobalStyles';
import DropoffForm from '../../components/InputForm/DropoffForm';

const CreateDropoffScreen = ({ navigation }) => {
	const data = {
		contact_name: '',
		contact_phone: '',
		dropoff_name: '',
		dropoff_address: '',
		dropoff_map: '',
		people_count: '',
		description: '',
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

			<DropoffForm data={data} verify={isSubmitPressed} onSubmit={onSubmit} />

			<View style={{ marginTop: 8 }}>
				<ActionBox
					type='primary'
					title='Add Dropoff'
					action={() => setSubmitPressed(true)}
				/>
				<ActionBox title='Cancel' action={navigation.goBack} />
			</View>
		</ScrollView>
	);
};

export default CreateDropoffScreen;
