import React, { useState } from 'react';
import { View } from 'react-native';
import TextInputLine from '../TextInputLine';
import DateTimeModal from '../DateTimeModal';

const DriveForm = ({ data, setData }) => {
	const [title, setTitle] = useState('');
	const [location, setLocation] = useState('');
	const [date, setDate] = useState(null);

	//\\\\\\\\\\\\ Validation Functions

	const TitleValidation = (text) => {
		// if validation fails, return false else true
		if (text.length == 0) {
			return 'Title Should not be Empty';
		}
		setTitle(text);
		return false;
	};

	const LocationValidation = (text) => {
		// if validation fails, return message else false
		if (text.length == 0) {
			return 'Location should not be Empty';
		}
		setLocation(text);
		return false;
	};

	const DateValidation = () => {
		return false;
	};

	//\\\\\\\\\\\\ Render Main Component

	return (
		<View>
			{/* Title */}
			<TextInputLine
				index={0}
				label='Title'
				value={title}
				placeholder='i.e. Donut Drive, XYZ School'
				validate={TitleValidation}
			/>

			{/* Location */}
			<TextInputLine
				index={1}
				label={'Drive Location'}
				value={location}
				placeholder='i.e. ABC School, Nazimababad'
				validate={LocationValidation}
			/>

			{/* Date and Time */}
			<DateTimeModal
				index={2}
				label={'Event Time'}
				value={null}
				validate={null}
			/>
		</View>
	);
};

export default DriveForm;
