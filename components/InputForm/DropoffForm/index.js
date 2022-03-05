import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import TextInputLine from '../TextInputLine';

const DropoffForm = ({ data, verify, onSubmit }) => {
	const [contactName, setContactName] = useState(data.contact_name);
	const [contactPhone, setContactPhone] = useState(data.contact_phone);
	const [dropoffName, setDropoffName] = useState(data.dropoff_name);
	const [dropoffAddress, setDropoffAddress] = useState(data.dropoff_address);
	const [dropoffMap, setDropoffMap] = useState(data.dropoff_map);
	const [peopleCount, setPeopleCount] = useState(data.people_count);
	const [description, setDescription] = useState(data.description);

	const [isValidated, setValidated] = useState({
		contact_name: true,
		contact_phone: true,
		dropoff_name: true,
		dropoff_address: true,
		dropoff_map: true,
		people_count: true,
		description: true,
	});

	useEffect(() => {
		if (verify) {
			// check if something is left or validation
			setValidated({
				contact_name: ContactNameValidation(contactName),
				contact_phone: ContactPhoneValidation(contactPhone),
				dropoff_name: DropoffNameValidation(dropoffName),
				dropoff_address: DropoffAddressValidation(dropoffAddress),
				dropoff_map: DropoffMapValidation(dropoffMap),
				people_count: PeopleCountValidation(peopleCount),
				description: descriptionValidation(description),
			});
		}
	}, [verify]);

	useEffect(() => {
		if (verify) {
			let notValidated =
				isValidated.contact_name ||
				isValidated.contact_phone ||
				isValidated.dropoff_name ||
				isValidated.dropoff_address ||
				isValidated.dropoff_map ||
				isValidated.people_count ||
				isValidated.description;

			if (notValidated == false) {
				onSubmit({
					contact_name: contactName,
					contact_phone: contactPhone,
					dropoff_name: dropoffName,
					dropoff_address: dropoffAddress,
					dropoff_map: dropoffMap,
					people_count: peopleCount,
					description: description,
				});
			} else {
				onSubmit(false);
			}
		}
	}, [isValidated]);

	//\\\\\\\\\\\\ Validation Functions

	const ContactNameValidation = (text) => {
		// if validation fails, return false else true
		let message = false;
		if (text.length == 0) {
			message = 'Contact Name is Required';
		}
		setContactName(text);
		return message;
	};

	const ContactPhoneValidation = (text) => {
		// if validation fails, return false else true
		let message = false;
		if (text.length == 0) {
			message = 'Contact Phone is Required';
		}
		setContactPhone(text);
		return message;
	};

	const DescriptionValidation = (text) => {
		// if validation fails, return false else true
		let message = false;
		if (text.length == 0) {
			message = 'Description is Required';
		}
		setDescription(text);
		return message;
	};

	const DropoffNameValidation = (text) => {
		// if validation fails, return false else true
		let message = false;
		if (text.length == 0) {
			message = 'Dropoff Name is Required';
		}
		setDropoffName(text);
		return message;
	};

	const DropoffAddressValidation = (text) => {
		// if validation fails, return false else true
		let message = false;
		if (text.length == 0) {
			message = 'Dropoff Address is Required';
		}
		setDropoffAddress(text);
		return message;
	};

	const DropoffMapValidation = (text) => {
		// if validation fails, return false else true
		let message = false;
		if (text.length == 0) {
			message = 'Map Location is Required';
		}
		setDropoffMap(text);
		return message;
	};

	const PeopleCountValidation = (text) => {
		// if validation fails, return false else true
		let message = false;
		if (text.length == 0) {
			message = 'People Count is Required';
		}
		setPeopleCount(text);
		return message;
	};

	return (
		<View>
			{/* Contact Name */}
			<TextInputLine
				index={0}
				label='Contact Name'
				value={contactName}
				placeholder='i.e. John Doe Smith'
				validate={ContactNameValidation}
				error={isValidated.contact_name}
			/>

			{/* Contact Phone */}
			<TextInputLine
				index={1}
				label='Contact Phone'
				value={contactPhone}
				placeholder='i.e. +92 345 1234567'
				validate={ContactPhoneValidation}
				error={isValidated.contact_phone}
			/>

			{/* Dropoff Name */}
			<TextInputLine
				index={2}
				label='Dropoff Name'
				value={dropoffName}
				placeholder='i.e. Student Biryani, Branch 2'
				validate={DropoffNameValidation}
				error={isValidated.dropoff_name}
			/>

			{/* Dropoff Address */}
			<TextInputLine
				index={3}
				label='Dropoff Address'
				value={dropoffAddress}
				placeholder='i.e. Gulshan e Iqbal 13-B'
				validate={DropoffAddressValidation}
				error={isValidated.dropoff_address}
			/>

			{/* Dropoff Map */}
			<TextInputLine
				index={4}
				label='Google Map Link'
				value={dropoffMap}
				placeholder='i.e. https://maps.app.goo.gl/vvAkDEKa4dVSoM3P7'
				validate={DropoffMapValidation}
				error={isValidated.dropoff_map}
			/>

			{/* People Count */}
			<TextInputLine
				index={5}
				label='People Count'
				value={peopleCount}
				placeholder='40'
				validate={PeopleCountValidation}
				error={isValidated.people_count}
			/>

			{/* Description */}
			<TextInputLine
				index={6}
				label='Description'
				value={description}
				placeholder='Brief Description about dropoff'
				validate={DescriptionValidation}
				error={isValidated.description}
			/>
		</View>
	);
};

export default DropoffForm;
