import React from 'react';
import { ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GlobalStyles from '../../styles/GlobalStyles';
import DriveDetails from '../../components/DetailsForm/DriveDetails';
import ActionBox from '../../components/ActionBox';

const DriveDetailsScreen = ({ navigation, route }) => {
	const { id } = route.params;

	// Fetch Data From id
	// Process Data here

	const data = {
		// creation_time: 'September 9, 2021 1:17 PM',
		last_modified: 'September 14, 2021 8:32 PM',
		title: 'Lorem ipsum dolor sit amet',
		location: 'consectetur adipiscing elit',
		date: 'November 4, 2021 3:00 PM',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		volunteers: {
			// min: 10,
			max: 15,
		},
	};

	return (
		<ScrollView contentContainerStyle={GlobalStyles.container}>
			<StatusBar style='dark' />

			{/* < */}
			<View style={{ flex: 1 }}>
				<DriveDetails data={data} />

				<ActionBox
					type='primary'
					title='See Participants'
					action={() =>
						navigation.navigate('DriveParticipantsScreen', { id: id })
					}
				/>
			</View>

			<View style={{ marginTop: 32 }}>
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
			</View>
		</ScrollView>
	);
};

export default DriveDetailsScreen;
