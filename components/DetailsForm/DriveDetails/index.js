import React from 'react';
import { View } from 'react-native';

import TextLine from '../TextLine';
import TextDescription from '../TextDescription';

const DriveDetails = ({ data }) => {
	const TimeLine = data.CREATION_TIME ? (
		<TextLine index={0} label='Creation Time' value={data.CREATION_TIME} />
	) : (
		<TextLine index={0} label='Last Modified' value={data.LAST_MODIFIED} />
	);

	const VolunteerLine = data.VOLUNTEERS.min ? (
		<TextLine
			index={5}
			label='Volunteer Required'
			value={data.VOLUNTEERS.min + ' - ' + data.VOLUNTEERS.max}
		/>
	) : (
		<TextLine
			index={5}
			label='Volunteer Required'
			value={data.VOLUNTEERS.max}
		/>
	);

	return (
		<View>
			{/* Time When this drive was created or modified */}
			{TimeLine}

			{/* Drive Name / title */}
			<TextLine index={1} label='Drive Title' value={data.DRIVE_TITLE} />

			{/* Drive lOCATION/aDDRESS (String) */}
			<TextLine index={2} label='Drive Location' value={data.DRIVE_LOC} />

			{/* Date when drive will happen */}
			<TextLine index={3} label='Drive Date' value={data.DRIVE_DATE} />

			{/* Food Description */}
			<TextDescription
				index={4}
				label='Drive Description'
				value={data.DESCRIPTION}
			/>

			{/* Volunteers Required */}
			{VolunteerLine}
		</View>
	);
};

export default DriveDetails;
