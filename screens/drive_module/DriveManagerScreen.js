import React, { useState } from 'react';
import { Text, Pressable, View, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';

import Options from '../../components/ManagerOptions/Options';

import GlobalStyles from '../../styles/GlobalStyles';
import Colors from '../../styles/Colors';
import DriveList from '../../components/ButtonList/DriveList';

const DriveManagerScreen = ({ navigation }) => {
	const [data, setData] = useState([
		{
			id: '1',
			title: 'ABC',
			date: '01 July, 2021',
			address: 'Plot 111, XYZ Street',
		},
		{
			id: '2',
			title: 'FGH',
			date: '02 July, 2021',
			address: 'Plot 222, XYZ Street',
		},
		{
			id: '3',
			title: 'IJK',
			date: '03 July, 2021',
			address: 'Plot 333, XYZ Street',
		},
		{
			id: '4',
			title: 'LMN',
			date: '04 July, 2021',
			address: 'Plot 444, XYZ Street',
		},
		{
			id: '5',
			title: 'OPQ',
			date: '05 July, 2021',
			address: 'Plot 555, XYZ Street',
		},
		{
			id: '6',
			title: 'RST',
			date: '06 July, 2021',
			address: 'Plot 666, XYZ Street',
		},
	]);

	const onChange = (query) => {
		// Fetch data Here
		console.log('Drive Status Changed', query);
	};

	const onPressHandler = (id) => {
		navigation.navigate('DriveDetailsScreen', { id });
	};

	return (
		<Pressable onPress={Keyboard.dismiss} style={GlobalStyles.container}>
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
				data={['Active', 'InActive', 'Completed', 'Cancelled']}
			/>

			<DriveList data={data} onPress={onPressHandler} />
		</Pressable>
	);
};

export default DriveManagerScreen;
