import moment from 'moment';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import GlobalStyles from '../../../styles/GlobalStyles';
import ContactLine from '../../ContactLine'
import TextLine from '../TextLine';
import TextLineClickable from '../TextLineClickable';
import adminApi from "../../../helpers/adminApi";
const VendorDetails = ({ data }) => {
	const [pickups, setPickups] = React.useState(0);

	const fetchData = async () => {
		var total_pickups = 0;
		if (data._id) {
			const resp = await adminApi.get_pickups({ "provider": data._id });
			total_pickups = resp.pickups.length;
		}
		else {
			return total_pickups
		}
		return total_pickups;
	}

	fetchData()
		.then((response) => {
			console.log(response);
			setPickups(response);
		})
		.catch((e) => {
			console.log(e);
		})
	const TimeLine = data.creation_time ? (
		<TextLine index={0} label='Creation Time' value={data.creation_time} />
	) : (
		<TextLine index={0} label='Id' value={data._id} />
	);

	const LocationButtonHandler = () => {
		console.log('Location clicked');
	};

	return (
		<View>
			{/* Time When this drive was created or modified */}
			{TimeLine}

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


			{/* Business Name */}
			{/* <TextLine index={4} label='Business Name' value={data.business_name} /> */}

			{/* Address with map location */}
			{/* <TextLineClickable
				index={5}
				label='Address'
				value={data.address}
				action={LocationButtonHandler}
			/> */}

			<View style={GlobalStyles.hrGrey}></View>

			{/* Total Pickups */}
			<TextLine index={5} label='Total Pickups' value={pickups} />

			{/* Last Pickup */}
			{/* <TextLine
				index={6}
				label='Last Pickup'
				value={moment(data.last_pickup).fromNow()}
			/> */}
		</View>
	);
};

export default VendorDetails;
