import React, { useEffect, useState } from 'react';
import { Text, Pressable, View, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';

import Options from '../../components/ManagerOptions/Options';

import GlobalStyles from '../../styles/GlobalStyles';
import Colors from '../../styles/Colors';
import DriveList from '../../components/ButtonList/DriveList';
const adminApi = require("../../helpers/adminApi");

const DriveManagerScreen = ({ navigation }) => {
	const [data, setData] = useState([]);

	const fetchData = async(status)=>{
		const resp = await adminApi.get_drives(status);
		return resp;
	}

	useEffect(()=>{
		fetchData(1)
		.then((response)=>{
			console.log(response);
			setData(response);
		})
		.catch((e)=>{
			console.log(e);
		})
	},[]);

	const onChange = (query) => {
		// Fetch data Here
		let status = -2;
		if(query.index==0) status = 1
		else if (query.index==1) status = 0
		else if (query.index==2) status = 2
		else status = -1
		fetchData(status)
		.then((response)=>{
			console.log(response);
			setData(response);
		})
		.catch((e)=>{
			console.log(e);
		})
		console.log('Drive Status Changed', query);
	};

	const onPressHandler = (data) => {
		navigation.navigate('DriveDetailsScreen', {id: data });
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
