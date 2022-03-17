import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import TextInputLine from '../TextInputLine';

// import DateTimeModal from '../DateTimeModal';
// import NumberRangeLine from '../NumberRangeLine';
// import moment from 'moment';

const DriveForm = ({ data, verify, onSubmit }) => {
	const [meetupTime, setMeetupTime] = useState(data.meetupTime);
	const [departureTime, setDepartureTime] = useState(data.departureTime);
	const [date, setDate] = useState(data.date);
	const [meetupPoint, setMeetupPoint] = useState(data.meetupPoint);
	const [driveLocation, setDriveLocation] = useState(data.driveLocation);
	const [volunteerCategory,setVolunteerCategory] = useState(data.volunteerCategory);
	const [maxCount,setMaxCount] = useState(data.maxCount);
	const [duration,setDuration] = useState(data.duration);
	const [description,setDescription] = useState(data.description);

	const [isValidated, setValidated] = useState({
		date: true,
		meetupTime: true,
		departureTime: true,
		meetupPoint: true,
		driveLocation: true,
		volunteerCategory: true,
		maxCount: true,
		duration: true,
		description: true,
	});

	useEffect(() => {
		if (verify) {
			//console.log(verify);
			// check if something is left or validation
			setValidated({
				date: DateValidation(date),
				meetupTime: MeetupTimeValidation(meetupPoint),
				departureTime: DepartureTimeValidation(departureTime),
				meetupPoint: MeetupPointValidation(meetupPoint),
				driveLocation: DriveLocationValidation(driveLocation),
				volunteerCategory: VolunteerCategoryValidation(volunteerCategory),
				maxCount: MaxCountValidation(maxCount),
				duration: DurationValidation(duration),
				description: DescriptionValidation(description),
			});
		}
	}, [verify]);

	useEffect(() => {
		if (verify) {
			let notValidated =
				isValidated.date ||
				isValidated.meetupTime ||
				isValidated.departureTime ||
				isValidated.meetupPoint ||
				isValidated.driveLocation ||
				isValidated.volunteerCategory ||
				isValidated.maxCount ||
				isValidated.duration ||
				isValidated.description;

			if (notValidated == false) {
				onSubmit({
					date: date,
					meetupTime: meetupTime,
					departureTime: departureTime,
					meetupPoint: meetupPoint,
					driveLocation: driveLocation,
					volunteerCategory: volunteerCategory,
					maxCount: maxCount,
					duration: duration,
					description: description,
				});
			} else {
				onSubmit(false);
			}
		}
	}, [isValidated]);

	//\\\\\\\\\\\\ Validation Functions

	const DateValidation = (text) => {
		// if validation fails, return false else true
		let message = false;
		if (text == '') {
			message = ' is Required';
		}
		setDate(text);
		return message;
	};

	const MeetupTimeValidation = (text) => {
		// if validation fails, return false else true
		let message = false;
		if (text == '') {
			message = ' is Required';
		}
		setMeetupTime(text);
		return message;
	};
	const MeetupPointValidation = (text) => {
		// if validation fails, return false else true
		let message = false;
		if (text == '') {
			message = ' is Required';
		}
		setMeetupPoint(text);
		return message;
	};
	const DepartureTimeValidation = (text) => {
		// if validation fails, return false else true
		let message = false;
		if (text == '') {
			message = ' is Required';
		}
		setDepartureTime(text);
		return message;
	};
	const DriveLocationValidation = (text) => {
		// if validation fails, return false else true
		let message = false;
		if (text == '') {
			message = ' is Required';
		}
		setDriveLocation(text);
		return message;
	};
	const VolunteerCategoryValidation = (text) => {
		// if validation fails, return false else true
		let message = false;
		if (text == '') {
			message = ' is Required';
		}
		setVolunteerCategory(text);
		return message;
	};
	const DurationValidation = (text) => {
		// if validation fails, return false else true
		let message = false;
		if (text == '') {
			message = ' is Required';
		}
		setDuration(text);
		return message;
	};
	const DescriptionValidation = (text) => {
		// if validation fails, return false else true
		let message = false;
		if (text == '' || text.length < 4) {
			message = 'Description is too short for explanation';
		}
		setDescription(text);
		return message;
	};

	const MaxCountValidation = (number) => {
		// if validation fails, return false else true
		let message = false;
		if (number < 5) {
			message = 'Too short';
		}
		setMaxCount(number);
		return message;
	};

	// const LocationValidation = (text) => {
	// 	// if validation fails, return message else false
	// 	let message = false;
	// 	if (text.length == 0) {
	// 		message = 'Location is Required';
	// 	}
	// 	setLocation(text);
	// 	return message;
	// };

	// const DateValidation = (date) => {
	// 	let message = false;
	// 	const now = moment();
	// 	if (now > date) {
	// 		message = 'Event Time must be in future, not in past';
	// 	}
	// 	setDate(date);
	// 	return message;
	// };

	// const VolunteersValidation = (minValue, maxValue) => {
	// 	// if validation fails, return false else true
	// 	let message = false;
	// 	const min = parseInt(minValue);
	// 	const max = parseInt(maxValue);

	// 	if (minValue == null) {
	// 		message =
	// 			maxValue == null
	// 				? 'Min Number for Volunteers is Required'
	// 				: 'Min Value Missing';
	// 	} else if (isNaN(min) || isNaN(max)) {
	// 		message =
	// 			maxValue != null && isNaN(max)
	// 				? 'Range must be in number'
	// 				: 'Min value is not a number';
	// 	} else if (min > max) {
	// 		message = 'Min value must be smaller than Max value';
	// 	}

	// 	setVols({ min: minValue, max: maxValue });
	// 	return message;
	// };

	//\\\\\\\\\\\\ Render Main Component

	return (
		<ScrollView>
			{/* Title */}
			{/* <TextInputLine
				index={0}
				label='Title'
				value={title}
				placeholder='i.e. Donut Drive, XYZ School'
				validate={TitleValidation}
				error={isValidated.title}
			/> */}

			{/* Location */}
			<TextInputLine
				index={0}
				label={'Drive Location'}
				value={driveLocation}
				placeholder='Mubarak Village'
				validate={DriveLocationValidation}
				error={isValidated.driveLocation}
			/>

			<TextInputLine
				index={1}
				label={'Drive Date'}
				value={date}
				placeholder='Sunday, 12th Feburary'
				validate={DateValidation}
				error={isValidated.date}
			/>

			<TextInputLine
				index={2}
				label={'Drive Duration'}
				value={duration}
				placeholder='5-6 hours'
				validate={DurationValidation}
				error={isValidated.duration}
			/>
			<TextInputLine
				index={3}
				label={'Volunteer Category'}
				value={volunteerCategory}
				placeholder='all/male/female'
				validate={VolunteerCategoryValidation}
				error={isValidated.volunteerCategory}
			/>
			<TextInputLine
				index={4}
				label={'Meetup Location'}
				value={meetupPoint}
				placeholder='KFC, Johar 12 branch'
				validate={MeetupPointValidation}
				error={isValidated.meetupPoint}
			/>
			<TextInputLine
				index={5}
				label={'Meetup Time'}
				value={meetupTime}
				placeholder='8:30 am'
				validate={MeetupTimeValidation}
				error={isValidated.meetupTime}
			/>
			<TextInputLine
				index={6}
				label={'Departure time'}
				value={departureTime}
				placeholder='When leaving for drive (i.e. 9:00 am)'
				validate={DepartureTimeValidation}
				error={isValidated.departureTime}
			/>
			<TextInputLine
				index={7}
				label={'Volunteers required'}
				value={maxCount}
				placeholder='50'
				validate={MaxCountValidation}
				error={isValidated.maxCount}
			/>

			<TextInputLine
				index={8}
				label={'Description of Drive'}
				value={description}
				placeholder='Brief description/guideline about your Drive'
				validate={DescriptionValidation}
				error={isValidated.description}
			/>
			
			{/* Date and Time */}
			{/* <DateTimeModal
				index={2}
				label={'Event Time'}
				value={date}
				validate={DateValidation}
				error={isValidated.date}
			/> */}

			{/* Drive Description */}

			{/* Volunteer Required */}
			{/* <NumberRangeLine
				index={4}
				label={'No. of Volunteers Required'}
				value={vols}
				validate={VolunteersValidation}
				error={isValidated.volunteers}
			/> */}

		</ScrollView>
	);
};

export default DriveForm;
