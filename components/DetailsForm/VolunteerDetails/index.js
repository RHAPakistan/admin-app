import moment from 'moment';
import React from 'react';
import { View } from 'react-native';
import GlobalStyles from '../../../styles/GlobalStyles';

import TextLine from '../TextLine';
import TextLineClickable from '../TextLineClickable';

const VolunteerDetails = ({ data }) => {
	const LocationButtonHandler = () => {
		console.log('Location:', data.business_map);
	};

	return (
		<View>
			{/* Name of volunteer */}
			<TextLine index={0} label='Name' value={data.name} />

			{/* Phone number of volunteer */}
			<TextLine index={1} label='Phone' value={data.phone} />

			{/* Email of volunteer */}
			<TextLine index={2} label='Email' value={data.email} />

			{/* CNIC of volunteer */}
			<TextLine index={3} label='CNIC' value={data.cnic} />

			{/* Date of Birth of volunteer */}
			<TextLine index={4} label='Date of Birth' value={data.birth_date} />

			{/* Home Address of volunteer */}
			<TextLine index={5} label='Home Address' value={data.address} />

			{/* Workplace of volunteer */}
			<TextLine index={6} label='Workplace' value={data.workplace} />

			{/* Facebook of volunteer */}
			<TextLine index={7} label='Facebook' value={data.facebook} />

			{/* Emergency Contact */}
			<TextLine
				index={8}
				label='Emergency Contact'
				value={data.emergency_contact}
			/>

			{/* Relation with contact */}
			<TextLine
				index={9}
				label='Relation with Contact'
				value={data.emergency_relation}
			/>

			{/* Workplace of volunteer */}
			<TextLine
				index={10}
				label='Allergy/Medical Condition'
				value={data.conditions}
			/>

			{/* Workplace of volunteer */}
			<TextLine index={11} label='Covid Vaccinated' value={data.vaccinated} />

			<View style={GlobalStyles.hrGrey}></View>

			{/* Delivered Pickups */}
			<TextLine
				index={12}
				label='Pickups Delivered'
				value={data.pickups_delivered}
			/>

			{/* Cancelled Pickups */}
			<TextLine
				index={13}
				label='Pickups Cancelled'
				value={data.pickups_cancelled}
			/>

			{/* Total Time Spent picking & delivering pickups */}
			<TextLine index={14} label='Total Time Spent' value={data.time_spent} />

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
