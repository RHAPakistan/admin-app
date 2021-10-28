import React, { useState } from 'react';
import { View } from 'react-native';
import TextInputLine from '../TextInputLine';
import DateTimeModal from '../DateTimeModal';

const DriveForm = ({ driveid }) => {
	const [title, setTitle] = useState('');
	const [location, setLocation] = useState('');
	const [date, setDate] = useState(null);

	//\\\\\\\\\\\\ Validation Functions
	const [validate, setValidate] = useState({
		title: false,
		location: false,
		date: false,
	});

	const TitleValidation = (text) => {
		// if validation fails, return false else true
		if (text.length == 0) {
			setValidate({ title: 'Title Should not be Empty', ...validate });
		} else {
			setValidate({ title: false, ...validate });
		}
		setTitle(text);
		return validate.title;
	};

	const LocationValidation = (text) => {
		// if validation fails, return message else false
		if (text.length == 0) {
			setValidate({ location: 'Location should not be Empty', ...validate });
		} else {
			setValidate({ location: false, ...validate });
		}
		setLocation(text);
		return validate.location;
	};

	const DateValidation = (date) => {
		if (false) {
			setValidate({ date: 'Something happened here', ...validate });
		} else {
			setValidate({ date: false, ...validate });
		}
		setDate(date);
		return validate.date;
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
				value={date}
				validate={DateValidation}
			/>
		</View>
	);
};

export default DriveForm;
