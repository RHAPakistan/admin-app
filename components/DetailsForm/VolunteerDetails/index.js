import moment from 'moment';
import React from 'react';
import { View } from 'react-native';
import GlobalStyles from '../../../styles/GlobalStyles';
import ContactLine from '../../ContactLine'
import TextLine from '../TextLine';
import TextLineClickable from '../TextLineClickable';
import adminApi from "../../../helpers/adminApi";
const VolunteerDetails = ({ data }) => {
	const LocationButtonHandler = () => {
		console.log('Location:', data.business_map);
	};
	const [pickupsDelivered, setPickupsDelivered] = React.useState(0);
	const [pickupsCancelled, setPickupsCancelled] = React.useState(0);
	const fetchData = async () => {
		let total_pickups = 0;
		let cancel_pickups = 0;
		if (data._id) {
			const resp = await adminApi.get_pickups({ "volunteer": data._id });
			const cancel_resp = await adminApi.get_pickups({ "volunteer": data._id })
			total_pickups = resp.pickups.length;
			cancel_pickups = cancel_resp.pickups.length;
		}
		else {
			return [total_pickups, cancel_pickups];
		}
		return [total_pickups, cancel_pickups];
	}

	fetchData()
		.then((response) => {
			console.log(response);
			setPickupsDelivered(response[0]);
			setPickupsCancelled(response[1]);
		})
		.catch((e) => {
			console.log(e);
		})

	return (
		<View>
			{/* name of person to contact */}
			<TextLine index={1} label='Contact Name' value={data.fullName} />

			{/* Phone number of contact */}
			{/* <TextLine index={2} label='Contact Phone' value={data.contactNumber} /> */}
			<ContactLine index={2} label="Contact Phone" name={data.contactNumber} number={data.contactNumber}></ContactLine>

			{/* email of contact */}
			<TextLine index={3} label='Contact Email' value={data.email} />

			{/* date of birth of contact */}
			<TextLine index={4} label='Date of birth' value={data.dateOfBirth} />

			{/* addresss of birth of contact */}
			<TextLine index={5} label='Address' value={data.address} />
	
			{/* gender of contact */}
			<TextLine index={6} label='gender' value={data.gender} />

			{/* Emergency Contact */}
			{/* <TextLine
				index={8}
				label='Emergency Contact'
				value={data.emergency_contact}
			/> */}

			{/* Relation with contact */}
			{/* <TextLine
				index={9}
				label='Relation with Contact'
				value={data.emergency_relation}
			/> */}

			{/* Workplace of volunteer */}
			{/* <TextLine
				index={10}
				label='Allergy/Medical Condition'
				value={data.conditions}
			/> */}

			{/* Workplace of volunteer */}
			{/* <TextLine index={11} label='Covid Vaccinated' value={data.vaccinated} /> */}

			<View style={GlobalStyles.hrGrey}></View>

			{/* Delivered Pickups */}
			<TextLine
				index={12}
				label='Pickups Delivered'
				value={pickupsDelivered}
			/>

			{/* Cancelled Pickups */}
			<TextLine
				index={13}
				label='Pickups Cancelled'
				value={pickupsCancelled}
			/>

			{/* Total Time Spent picking & delivering pickups */}
			{/* <TextLine index={14} label='Total Time Spent' value={data.time_spent} /> */}

			{/* Last Pickup */}
			{/* <TextLine
				index={6}
				label='Last Pickup'
				value={moment(data.last_pickup).fromNow()}
			/> */}
		</View>
	);
};

export default VolunteerDetails;
