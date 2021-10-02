import React, { useState } from 'react';
import { View } from 'react-native';

import TextLine from '../TextLine';
import TextLineClickable from '../TextLineClickable';
import ButtonLine from '../ButtonLine';
import TextDescription from '../TextDescription';

const PickupDetails = ({ data }) => {
	let indexOffset = 1;

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

	let DataLine =
		data.COMPLETION_TIME || data.CANCELLATION_TIME ? (
			data.COMPLETION_TIME ? (
				<TextLine
					index={indexOffset}
					label='Completion Time'
					value={data.COMPLETION_TIME}
				/>
			) : (
				<TextLine
					index={indexOffset}
					label='Cancellation Time'
					value={data.CANCELLATION_TIME}
				/>
			)
		) : null;
	indexOffset = DataLine ? 1 : 0;

	return (
		<View>
			<TextLine index={0} label='Booking Time' value={data.BOOKING_TIME} />
			{DataLine}
			<TextLine
				index={indexOffset + 1}
				label='Contact Name'
				value={data.CONTACT_NAME}
			/>
			<ButtonLine
				index={indexOffset + 2}
				label='Contact Phone'
				title='Contact'
				action={data.CONTACT_PHONE}
			/>
			<ButtonLine
				index={indexOffset + 3}
				label='Pickup Location'
				title='Map'
				action={data.PICKUP_LOCATION}
			/>
			<TextLine
				index={indexOffset + 4}
				label='Surplus Type'
				value={data.SURPLUS_TYPE}
			/>
			<TextDescription
				index={indexOffset + 5}
				label='Food Description'
				value={data.DESCRIPTION}
			/>
			<SelectDropOff index={indexOffset + 6} data={data.DROPOFF_LOC} />
		</View>
	);
};

export default PickupDetails;
