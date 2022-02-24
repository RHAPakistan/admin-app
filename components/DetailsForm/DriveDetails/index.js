import React from 'react';
import { View } from 'react-native';

import TextLine from '../TextLine';
import TextDescription from '../TextDescription';

const DriveDetails = ({ data }) => {
	const TimeLine = data.creation_time ? (
		<TextLine index={0} label='Creation Time' value={data.creation_time} />
	) : (
		<TextLine index={0} label='Last Modified' value={data.last_modified} />
	);

	const VolunteerLine = () => {
		const { min, max } = data.volunteers;

		return (
			<TextLine
				index={5}
				label='Volunteer Required'
				value={(min ? min : '0') + ' - ' + (max ? max : '')}
			/>
		);
	};

	return (
		<View>
			{/* Time When this drive was created or modified */}
			{TimeLine}

			{/* Drive Name / title */}
			<TextLine index={1} label='Drive Title' value={data.title} />

			{/* Drive lOCATION/ADDRESS (String) */}
			<TextLine index={2} label='Drive Location' value={data.location} />

			{/* Date when drive will happen */}
			<TextLine index={3} label='Event Time' value={data.date} />

			{/* Food Description */}
			<TextDescription
				index={4}
				label='Drive Description'
				value={data.description}
			/>

			{/* Volunteers Required */}
			<VolunteerLine />
		</View>
	);
};

export default DriveDetails;
