import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import TextInputLine from '../TextInputLine';
import DateTimeModal from '../DateTimeModal';
import NumberRangeLine from '../NumberRangeLine';
import moment from 'moment';

const DriveForm = ({ data, verify, onSubmit }) => {
	const [title, setTitle] = useState(data.title);
	const [location, setLocation] = useState(data.location);
	const [date, setDate] = useState(data.date ? new Date(data.date) : null);
	const [desc, setDesc] = useState(data.description);
	const [vols, setVols] = useState(data.volunteers);

	const [isValidated, setValidated] = useState({
		title: true,
		location: true,
		date: true,
		description: true,
		volunteers: true,
	});

	useEffect(() => {
		if (verify) {
			console.log(verify);
			// check if something is left or validation
			setValidated({
				title: TitleValidation(title),
				location: LocationValidation(location),
				date: DateValidation(date),
				description: DescriptionValidation(desc),
				volunteers: TitleValidation(vols),
			});
		}
	}, [verify]);

	useEffect(() => {
		if (verify) {
			let notValidated =
				isValidated.title ||
				isValidated.location ||
				isValidated.date ||
				isValidated.description ||
				isValidated.volunteers;

			if (notValidated == false) {
				onSubmit({
					title: title,
					location: location,
					date: date,
					description: desc,
					volunteers: vols,
				});
			} else {
				onSubmit(false);
			}
		}
	}, [isValidated]);

	//\\\\\\\\\\\\ Validation Functions

	const TitleValidation = (text) => {
		// if validation fails, return false else true
		let message = false;
		if (text.length == 0) {
			message = 'Title is Required';
		}
		setTitle(text);
		return message;
	};

	const LocationValidation = (text) => {
		// if validation fails, return message else false
		let message = false;
		if (text.length == 0) {
			message = 'Location is Required';
		}
		setLocation(text);
		return message;
	};

	const DateValidation = (date) => {
		let message = false;
		const now = moment();
		if (now > date) {
			message = 'Event Time must be in future, not in past';
		}
		setDate(date);
		return message;
	};

	const DescriptionValidation = (text) => {
		// if validation fails, return false else true
		let message = false;
		if (text.length < 8) {
			message = 'Description is too short for explanation';
		}
		setDesc(text);
		return message;
	};

	const VolunteersValidation = (minValue, maxValue) => {
		// if validation fails, return false else true
		let message = false;
		const min = parseInt(minValue);
		const max = parseInt(maxValue);

		if (minValue == null) {
			message =
				maxValue == null
					? 'Min Number for Volunteers is Required'
					: 'Min Value Missing';
		} else if (isNaN(min) || isNaN(max)) {
			message =
				maxValue != null && isNaN(max)
					? 'Range must be in number'
					: 'Min value is not a number';
		} else if (min > max) {
			message = 'Min value must be smaller than Max value';
		}

		setVols({ min: minValue, max: maxValue });
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
				error={isValidated.title}
			/>

			{/* Location */}
			<TextInputLine
				index={1}
				label={'Drive Location'}
				value={location}
				placeholder='i.e. ABC School, Nazimababad'
				validate={LocationValidation}
				error={isValidated.location}
			/>

			{/* Date and Time */}
			<DateTimeModal
				index={2}
				label={'Event Time'}
				value={date}
				validate={DateValidation}
				error={isValidated.date}
			/>

			{/* Drive Description */}
			<TextInputLine
				index={3}
				label={'Description'}
				value={desc}
				placeholder='Brief introduction about your Drive'
				validate={DescriptionValidation}
				error={isValidated.description}
			/>

			{/* Volunteer Required */}
			<NumberRangeLine
				index={4}
				label={'No. of Volunteers Required'}
				value={vols}
				validate={VolunteersValidation}
				error={isValidated.volunteers}
			/>
		</View>
	);
};

export default DriveForm;
