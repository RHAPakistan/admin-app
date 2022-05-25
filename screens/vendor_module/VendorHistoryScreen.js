import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { LogBox, Text, Pressable, View, Keyboard } from 'react-native';


import Options from '../../components/ManagerOptions/Options';
import { SocketContext } from '../../context/socket';
import GlobalStyles from '../../styles/GlobalStyles';
import PickupList from '../../components/ButtonList/PickupList';
const adminApi = require("../../helpers/adminApi");
LogBox.ignoreLogs([
	'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.',
]);
const VendorHistoryScreen = ({ navigation, route }) => {
	const id = route.params.id;
	const socket = useContext(SocketContext);
	const [data, setData] = useState([]);
	const [status_no, setStatus] = useState(0); 

	useEffect(() => {

		const onMount = navigation.addListener('focus', () => {
			// The screen is focused
			// Call any action and update data
			console.log("Navigated to pickup manager");
			const fetchData = async () => {
				const resp = await adminApi.get_pickups({"provider":id});

				return resp.pickups;
			}
			fetchData()
				.then((response) => {
					setData(response);

				})
				.catch((e) => {
					console.log(e);
				})
			
		});
		const unsub = () => {
			console.log("remove all listeners");
			onMount();
		}
		// Return the function to unsubscribe from the event so it gets removed on unmount
		return () => unsub();
	}, [navigation])


	const onChange = async (query) => {
		// fetch data here;
		if (query.index == 0) {
			const response = await adminApi.get_pickups({"provider":id});
			setData(response.pickups);
			setStatus(status_no);
		}
		else {
			const response = await adminApi.get_pickups({"provider":id,"status": query.index - 1 });
			console.log(response);
			setData(response.pickups);
			const indie = query.index - 1;
			setStatus(indie);
			console.log('Pickup Status Changed', query);
			console.log(status_no);
		}
	};

	const onPressHandler = (id) => {
		// navigation.navigate('PickupDetailsScreen', { pickup: id });
		console.log("pickup clicked");
	};


	return (
		<Pressable onPress={Keyboard.dismiss} style={GlobalStyles.container}>
			<StatusBar style='light' />

			<View style={GlobalStyles.screenTitle}>
				<Text style={GlobalStyles.screenTitleText}>Pickups</Text>
			</View>

			<Options
				onChange={onChange}
				label='Status'
				data={[
					'All',
					'Unassigned',
					'Assigned',
					'Pick food',
					'Deliver Food',
					'Completed',
					'Cancelled'
				]}
			/>

			<PickupList data={data} onPress={onPressHandler} />
		</Pressable>
	);
};

export default VendorHistoryScreen;
