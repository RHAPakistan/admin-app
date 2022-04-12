import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';

import GlobalStyles from '../../styles/GlobalStyles';
import VendorDetails from '../../components/DetailsForm/VendorDetails';
import ActionBox from '../../components/ActionBox';
import adminApi from "../../helpers/adminApi";
const VendorDetailsScreen = ({ navigation, route }) => {
	const { id } = route.params;
	const [data, setData] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const resp = await adminApi.get_provider(id);
			return resp;
		}
		fetchData()
			.then((response) => {
				setData(response);
			})
			.catch((e)=>{
				console.log(e);
			})

	}, [navigation])

	return (
		<ScrollView contentContainerStyle={GlobalStyles.container}>
			<StatusBar style='dark' />

			<View style={{ flex: 1 }}>
				<VendorDetails navigation={navigation} data={data} />

				<ActionBox
					type='primary'
					title='Pickup History'
					action={() => navigation.navigate('VendorHistoryScreen', { id: id })}
				/>
			</View>

			<View>
				{/* When Cancelling or deactivating, a modal should appear to ask if admin really wants to cancel the pickup */}
				<ActionBox
					type='cancel'
					title='Deactivate Account'
					action={() => console.log('Deactivate Button Clicked')}
				/>
			</View>
		</ScrollView>
	);
};

export default VendorDetailsScreen;
