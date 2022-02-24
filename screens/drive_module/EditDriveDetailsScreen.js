import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ActionBox from '../../components/ActionBox';

import GlobalStyles from '../../styles/GlobalStyles';
import DriveForm from '../../components/InputForm/DriveForm';

const EditDriveDetailsScreen = ({ navigation, route }) => {
	const { id } = route.params;

	// Fetch Data From id
	// Process Data here

	const [data, setData] = useState({
		title: 'Lorem ipsum dolor sit amet',
		location: 'consectetur adipiscing elit',
		date: 'November 4, 2021 3:00 PM',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		volunteers: {
			min: '10',
			max: '15',
		},
	});
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

			{/* Input Form Here */}
			<DriveForm data={data} verify={isSubmitPressed} onSubmit={onSubmit} />
			<View style={{ marginTop: 8 }}>
				<ActionBox
					type='primary'
					title='Add Drive'
					action={() => setSubmitPressed(true)}
				/>
				<ActionBox title='Cancel' action={navigation.goBack} />
			</View>
		</ScrollView>
	);
};

export default EditDriveDetailsScreen;
