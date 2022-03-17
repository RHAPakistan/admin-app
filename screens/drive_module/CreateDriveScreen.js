import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ActionBox from '../../components/ActionBox';

import GlobalStyles from '../../styles/GlobalStyles';
import DriveForm from '../../components/InputForm/DriveForm';

const CreateDriveScreen = ({ navigation }) => {
	const data = {
		title: '',
		location: '',
		date: null,
		description: '',
		volunteers: {
			min: null,
			max: null,
		},
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

export default CreateDriveScreen;
