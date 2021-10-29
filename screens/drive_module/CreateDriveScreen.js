import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ActionBox from '../../components/ActionBox';

import GlobalStyles from '../../styles/GlobalStyles';
import DriveForm from '../../components/InputForm/DriveForm';

const CreateDriveScreen = ({ navigation }) => {
	const [data, setData] = useState({});
	const [isSubmitPressed, setSubmitPressed] = useState(false);

	const onSubmit = (hasError) => {
		if (hasError) {
			setSubmitPressed(false);
		} else {
			// Submit Data Here
			navigation.goBack();
		}
	};

	return (
		<ScrollView contentContainerStyle={GlobalStyles.container}>
			<StatusBar style='dark' />

			{/* Input Form Here */}
			<DriveForm
				data={data}
				setData={setData}
				verify={isSubmitPressed}
				onSubmit={onSubmit}
			/>
			<View style={{ marginTop: 8 }}>
				<ActionBox
					type='primary'
					title='Add Drive'
					action={() => setSubmitPressed(true)}
				/>
				<ActionBox title='Cancel' action={() => navigation.goBack()} />
			</View>
		</ScrollView>
	);
};

export default CreateDriveScreen;
