import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GlobalStyles from '../../styles/GlobalStyles';
import DriveForm from '../../components/InputForm/DriveForm';

const CreateDriveScreen = ({ navigation }) => {
	const [data, setData] = useState({});
	return (
		<ScrollView contentContainerStyle={GlobalStyles.container}>
			<StatusBar style='dark' />

			{/* Input Form Here */}
			<DriveForm setData={setData} />
		</ScrollView>
	);
};

export default CreateDriveScreen;
