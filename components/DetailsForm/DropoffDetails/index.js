import moment from 'moment';
import React from 'react';
import { View } from 'react-native';
import GlobalStyles from '../../../styles/GlobalStyles';

import TextLine from '../TextLine';
import TextLineClickable from '../TextLineClickable';
import TextDescription from '../TextDescription';

const DropoffDetails = ({ data }) => {
	const TimeLine = data.creation_time ? (
		<TextLine index={0} label='Creation Time' value={data.creation_time} />
	) : (
		<TextLine index={0} label='Last Modified' value={data.last_modified} />
	);

	const LocationButtonHandler = () => {
		console.log('Location:', data.dropoff_map);
	};

	return (
		<View>
			{/* Time When this drive was created or modified */}
			{TimeLine}

			{/* name of person to contact */}
			<TextLine index={1} label='Contact Name' value={data.contact_name} />

			{/* Phone number of contact */}
			<TextLine index={2} label='Contact Phone' value={data.contact_phone} />

			{/* Dropoff Name */}
			<TextLine index={3} label='Dropoff Name' value={data.dropoff_name} />

			{/* Address with map location */}
			<TextLineClickable
				index={4}
				label='Dropoff Address'
				value={data.dropoff_address}
				action={LocationButtonHandler}
			/>

			{/* People Count */}
			<TextLine index={5} label='People Count' value={data.people_count} />

			{/* Description */}
			<TextDescription index={6} label='Description' value={data.description} />

			<View style={GlobalStyles.hrGrey}></View>

			{/* Total Pickups */}
			<TextLine index={7} label='Total Pickups' value={data.total_pickups} />

			{/* Last Pickup */}
			<TextLine
				index={8}
				label='Last Pickup'
				value={moment(data.last_pickup).fromNow()}
			/>
		</View>
	);
};

export default DropoffDetails;
