import React from 'react';
import { View } from 'react-native';

import TextLine from '../TextLine';
import TextLineClickable from '../TextLineClickable';
import ButtonLine from '../ButtonLine';
import TextDescription from '../TextDescription';

import styles from '../styles';

const PickupDetails = ({ data }) => {
	let indexOffset = 1;

	const ButtonToTextClickable = ({ data, index, label, title }) => {
		const { value, action } = data;

		const dataProps = { index, label, title, value, action };
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

	let CompletionLine =
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
	indexOffset = CompletionLine ? 1 : 0;

	let ProviderLine =
		data.PROVIDER.type === 'Registered' ? (
			<TextLineClickable
				index={indexOffset + 3}
				label='Vendor Name'
				value={data.PROVIDER.name}
				action={data.PROVIDER.action}
			/>
		) : (
			<TextLine
				index={indexOffset + 3}
				label='Vendor Type'
				value={data.PROVIDER.type}
			/>
		);
	return (
		<View>
			{/* Booking Time: When Pickup is created */}
			<TextLine index={0} label='Booking Time' value={data.BOOKING_TIME} />

			{/* If Pickuo is cancelled or completed */}
			{CompletionLine}

			{/* Contact Name */}
			<TextLine
				index={indexOffset + 1}
				label='Contact Name'
				value={data.CONTACT_NAME}
			/>

			{/* contact phone number, and go to dialer if clicked */}
			<TextLineClickable
				index={indexOffset + 2}
				label='Contact Phone'
				value={data.CONTACT_PHONE}
				action={() => console.log('Phone Number Clicked')}
			/>

			{/* vendor/provider name or Type if Guest */}
			{ProviderLine}

			{/* Go to google map when clicked to find the location */}
			<ButtonLine
				index={indexOffset + 4}
				label='Pickup Location'
				title='Map'
				action={data.PICKUP_LOCATION}
			/>

			{/* Surplus type */}
			<TextLine
				index={indexOffset + 5}
				label='Surplus Type'
				value={data.SURPLUS_TYPE}
			/>

			{/* Food Description */}
			<TextDescription
				index={indexOffset + 6}
				label='Food Description'
				value={data.DESCRIPTION}
			/>

			{/* Admin Actions Starts here */}
			<View style={styles.splitter}></View>

			{/* Assign dropoff location */}
			<ButtonToTextClickable
				index={indexOffset + 7}
				label='Drop-off Location'
				title='Assign'
				data={data.DROPOFF_LOC}
			/>

			{/* Assign volunteer manually */}
			<ButtonToTextClickable
				index={indexOffset + 8}
				label='Assign Volunteer Manually?'
				title='Assign'
				data={data.VOLUNTEER}
			/>
		</View>
	);
};

export default PickupDetails;
