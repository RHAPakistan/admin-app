import React, { useState } from 'react';
import {
	ScrollView,
	Text,
	TouchableWithoutFeedback,
	View,
	TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';

import SelectOptions from '../../components/SelectOptions';
import DriveList from '../../components/ButtonList/DriveList';

import GlobalStyles from '../../styles/GlobalStyles';
import Colors from '../../styles/Colors';

const DriveManagerScreen = ({ navigation }) => {
	const [status, setStatus] = useState([]);
	const [dismissed, setDismissed] = useState(false);

	return (
		<ScrollView style={GlobalStyles.container}>
			<TouchableWithoutFeedback onPress={() => setDismissed(true)}>
				<View>
					<StatusBar style='light' />

					<View style={GlobalStyles.screenTitle}>
						<Text style={GlobalStyles.screenTitleText}>Drive Manager</Text>

						<TouchableOpacity
							style={GlobalStyles.screenTitleButton}
							onPress={() => navigation.push('CreateDriveScreen')}>
							<Entypo name='plus' size={30} color={Colors.white} />
						</TouchableOpacity>
					</View>

					<SelectOptions
						setValue={setStatus}
						label='Status'
						data={['Egypt', 'Canada', 'Australia', 'Ireland']}
					/>
				</View>
			</TouchableWithoutFeedback>
			<DriveList
				{...{
					action: (id) => {
						navigation.navigate('DriveDetailsScreen', { id: id });
					},
					clearDismissed: () => {
						setDismissed(false);
					},
					dismissed,
					status,
				}}
			/>
		</ScrollView>
	);
};

export default DriveManagerScreen;
