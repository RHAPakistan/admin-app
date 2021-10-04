import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GlobalStyles from '../../styles/GlobalStyles';
import DriveDetails from '../../components/DetailsForm/DriveDetails';
import ActionBox from '../../components/ActionBox';

const DriveDetailsScreen = ({ navigation, route }) => {
	const { id } = route.params;

	// Fetch Data From id
	// Process Data here

	const data = {
		CREATION_TIME: '{CREATION_TIME_DATE}',
		LAST_MODIFIED: '{LAST_MODIFIED}',
		DRIVE_TITLE: '{DRIVE_TITLE}',
		DRIVE_LOC: '{DRIVE_LOC}',
		DRIVE_DATE: '{DRIVE_DATE}',
		DESCRIPTION:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		VOLUNTEERS: {
			// min: 10,
			max: 15,
		},
	};

	return (
		<ScrollView style={GlobalStyles.container}>
			<StatusBar style='dark' />

			<DriveDetails data={data} />

			<ActionBox
				type='primary'
				title='See Participants'
				action={() =>
					navigation.navigate('DriveParticipantsScreen', { id: id })
				}
			/>

			{/* When Cancelling or deactivating, a modal should appear to ask if admin really wants to cancel the pickup */}
			<ActionBox
				type='cancel'
				title='Deactivate'
				action={() => console.log('Deactivate Button Clicked')}
			/>

			<ActionBox
				type='cancel'
				title='Cancel'
				action={() => console.log('Cancel Button Clicked')}
			/>
		</ScrollView>
	);
};

export default DriveDetailsScreen;
