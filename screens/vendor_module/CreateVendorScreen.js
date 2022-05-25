import React from 'react';
import { ScrollView } from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
import Signup from '../../components/providerSignup';

const CreateVendorScreen = ({ navigation }) => {
	

	return (
		<ScrollView contentContainerStyle={GlobalStyles.container}>
			<Signup navigation={navigation}/>
		</ScrollView>
	);
};

export default CreateVendorScreen;
