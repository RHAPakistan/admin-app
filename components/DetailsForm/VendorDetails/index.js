import moment from 'moment';
import React from 'react';
import { View } from 'react-native';
import GlobalStyles from '../../../styles/GlobalStyles';

import TextLine from '../TextLine';
import TextLineClickable from '../TextLineClickable';

const VendorDetails = ({ data }) => {
	const TimeLine = data.creation_time ? (
		<TextLine index={0} label='Creation Time' value={data.creation_time} />
	) : (
		<TextLine index={0} label='Last Modified' value={data.last_modified} />
	);

	const LocationButtonHandler = () => {
		console.log('Location:', data.business_map);
	};

	return (
		<View>
			{/* Time When this drive was created or modified */}
			{TimeLine}

			{/* name of person to contact */}
			<TextLine index={1} label='Contact Name' value={data.contact_name} />

			{/* Phone number of contact */}
			<TextLine index={2} label='Contact Phone' value={data.contact_phone} />

			{/* email of contact */}
			<TextLine index={3} label='Contact Email' value={data.contact_email} />

			{/* Business Name */}
			<TextLine index={4} label='Business Name' value={data.business_name} />

			{/* Address with map location */}
			<TextLineClickable
				index={5}
				label='Business Address'
				value={data.business_address}
				action={LocationButtonHandler}
			/>

			<View style={GlobalStyles.hrGrey}></View>

			{/* Total Pickups */}
			<TextLine index={5} label='Total Pickups' value={data.total_pickups} />

			{/* Last Pickup */}
			<TextLine
				index={6}
				label='Last Pickup'
				value={moment(data.last_pickup).fromNow()}
			/>
		</View>
	);
};

export default VendorDetails;
