import React from 'react';
import { View } from 'react-native';

import TextLine from '../TextLine';
import TextLineClickable from '../TextLineClickable';
import ButtonLine from '../ButtonLine';
import TextDescription from '../TextDescription';

const PickupDetails = ({ data }) => {
	const SelectDropOff = ({ index, data }) => {
		const { value, action } = data;

		const dataProps = {
			index,
			label: 'Drop-off Location',
			title: 'Assign',
			value,
			action,
		};
		return (
			<View>
				{!value ? (
					<ButtonLine {...dataProps} />
				) : (
					<TextLineClickable {...dataProps} />
				)}
			</View>
		);
	};

	return (
		<View>
			<TextLine index={0} label='Booking Time' value={data.BOOKING_TIME} />
			<TextLine index={1} label='Contact Name' value={data.CONTACT_NAME} />
			<ButtonLine
				index={2}
				label='Contact Phone'
				title='Contact'
				action={data.CONTACT_PHONE}
			/>
			<ButtonLine
				index={3}
				label='Pickup Location'
				title='Map'
				action={data.PICKUP_LOCATION}
			/>
			<TextLine index={4} label='Surplus Type' value={data.SURPLUS_TYPE} />
			<TextDescription
				index={5}
				label='Food Description'
				value={data.DESCRIPTION}
			/>
			<SelectDropOff index={6} data={data.DROPOFF_LOC} />
		</View>
	);
};

export default PickupDetails;
