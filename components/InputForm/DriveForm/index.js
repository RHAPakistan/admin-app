import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import TextInputLine from '../TextInputLine';
import DateTimeModal from '../DateTimeModal';
import moment from 'moment';

const DriveForm = ({ data, setData, verify, onSubmit }) => {
	const [title, setTitle] = useState('');
	const [location, setLocation] = useState('');
	const [date, setDate] = useState(null);
	const [desc, setDesc] = useState('');

	useEffect(() => {
		if (verify) {
			setErrorText({
				title: validate.title ? false : 'Title is Required',
				location: validate.location ? false : 'Location is Required',
				date: validate.date ? false : 'Date is Required',
				description: validate.description ? false : 'Description is Required',
			});

			let hasError =
				validate.title &&
				validate.location &&
				validate.date &&
				validate.description;

			onSubmit(!hasError);
		}
	}, [verify]);

	//\\\\\\\\\\\\ Validation Functions
	const [validate, setValidate] = useState({
		title: false,
		location: false,
		date: false,
		description: false,
	});

	const [ErrorText, setErrorText] = useState({
		title: false,
		location: false,
		date: false,
		description: false,
	});

	const TitleValidation = (text) => {
		// if validation fails, return false else true
		let message = false;
		if (text.length == 0) {
			message = 'Location is Required';
		}
		setValidate({ ...validate, title: !message });
		setTitle(text);
		return message;
	};

	const LocationValidation = (text) => {
		// if validation fails, return message else false
		let message = false;
		if (text.length == 0) {
			message = 'Location is Required';
		}
		setValidate({ ...validate, location: !message });
		setLocation(text);
		return message;
	};

	const DateValidation = (date) => {
		let message = false;
		const now = moment();
		if (now > date) {
			message = 'Event Time must be in future, not in past';
		}
		setValidate({ ...validate, date: !message });
		setDate(date);
		return message;
	};

	const DescriptionValidation = (text) => {
		// if validation fails, return false else true
		let message = false;
		if (text.length < 8) {
			message = 'Description is too short for explanation';
		}
		setValidate({ ...validate, description: !message });
		setDesc(text);
		return message;
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
				error={ErrorText.title}
			/>

			{/* Location */}
			<TextInputLine
				index={1}
				label={'Drive Location'}
				value={location}
				placeholder='i.e. ABC School, Nazimababad'
				validate={LocationValidation}
				error={ErrorText.location}
			/>

			{/* Date and Time */}
			<DateTimeModal
				index={2}
				label={'Event Time'}
				value={date}
				validate={DateValidation}
				error={ErrorText.date}
			/>

			{/* Drive Description */}
			<TextInputLine
				index={3}
				label={'Description'}
				value={desc}
				placeholder='Brief introduction about your Drive'
				validate={DescriptionValidation}
				error={ErrorText.description}
			/>
		</View>
	);
};

export default DriveForm;
