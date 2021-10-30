import React, { useState } from 'react';
import { ScrollView, Text, Pressable, View, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';

import Options from '../../components/ManagerOptions/Options';

import GlobalStyles from '../../styles/GlobalStyles';
import Colors from '../../styles/Colors';

const DriveManagerScreen = ({ navigation }) => {
	const onChange = (query) => {
		console.log('Drive Status Changed', query);
	};
	return (
		<ScrollView style={GlobalStyles.container}>
			<Pressable onPress={Keyboard.dismiss}>
				<View>
					<StatusBar style='light' />

					<View style={GlobalStyles.screenTitle}>
						<Text style={GlobalStyles.screenTitleText}>Drive Manager</Text>

						<Pressable
							style={GlobalStyles.screenTitleButton}
							onPress={() => navigation.push('CreateDriveScreen')}>
							<Entypo name='plus' size={30} color={Colors.white} />
						</Pressable>
					</View>

					<Options
						onChange={onChange}
						label='Status'
						data={['Egypt', 'Canada', 'Australia', 'Ireland']}
					/>
				</View>
			</Pressable>
		</ScrollView>
	);
};

export default DriveManagerScreen;
