import React, { useState } from 'react';
import { Keyboard, ScrollView, Text, Pressable, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';

import Search from '../../components/ManagerOptions/Search';

import GlobalStyles from '../../styles/GlobalStyles';

const VendorManagerScreen = ({ navigation }) => {
	const onSubmit = (query) => {
		// on submit, fetch data based on search query
		console.log('Vendor Searched', query);
	};

	return (
		<ScrollView style={GlobalStyles.container}>
			<Pressable onPress={Keyboard.dismiss}>
				<View>
					<StatusBar style='dark' />
					<View style={GlobalStyles.screenTitle}>
						<Text style={GlobalStyles.screenTitleText}>Vendor Manager</Text>
						<Pressable
							style={GlobalStyles.screenTitleButton}
							onPress={() => navigation.push('CreateVendorScreen')}>
							<Entypo name='plus' size={30} color={Colors.white} />
						</Pressable>
					</View>

					<Search onSubmit={onSubmit} placeholder='Search Vendor' />
				</View>
			</Pressable>
		</ScrollView>
	);
};

export default VendorManagerScreen;
