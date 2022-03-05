import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import TextInputLine from '../TextInputLine';

const VendorForm = ({ data, verify, onSubmit }) => {
	const [contactName, setContactName] = useState(data.contact_name);
	const [contactPhone, setContactPhone] = useState(data.contact_phone);
	const [contactEmail, setContactEmail] = useState(data.contact_email);
	const [businessName, setBusinessName] = useState(data.business_name);
	const [businessAddress, setBusinessAddress] = useState(data.business_address);
	const [businessMap, setBusinessMap] = useState(data.business_map);

	const [isValidated, setValidated] = useState({
		contact_name: true,
		contact_phone: true,
		contact_email: true,
		business_name: true,
		business_address: true,
		business_map: true,
	});

	useEffect(() => {
		if (verify) {
			// check if something is left or validation
			setValidated({
				contact_name: ContactNameValidation(contactName),
				contact_phone: ContactPhoneValidation(contactPhone),
				contact_email: ContactEmailValidation(contactEmail),
				business_name: BusinessNameValidation(businessName),
				business_address: BusinessAddressValidation(businessAddress),
				business_map: BusinessMapValidation(businessMap),
			});
		}
	}, [verify]);

	useEffect(() => {
		if (verify) {
			let notValidated =
				isValidated.contact_name ||
				isValidated.contact_phone ||
				isValidated.contact_email ||
				isValidated.business_name ||
				isValidated.business_address ||
				isValidated.business_map;

			if (notValidated == false) {
				onSubmit({
					contact_name: contactName,
					contact_phone: contactPhone,
					contact_email: contactEmail,
					business_name: businessName,
					business_address: businessAddress,
					business_map: businessMap,
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

	const ContactEmailValidation = (text) => {
		// if validation fails, return false else true
		let message = false;
		if (text.length == 0) {
			message = 'Contact Email is Required';
		}
		setContactEmail(text);
		return message;
	};

	const BusinessNameValidation = (text) => {
		// if validation fails, return false else true
		let message = false;
		if (text.length == 0) {
			message = 'Business Name is Required';
		}
		setBusinessName(text);
		return message;
	};

	const BusinessAddressValidation = (text) => {
		// if validation fails, return false else true
		let message = false;
		if (text.length == 0) {
			message = 'Business Address is Required';
		}
		setBusinessAddress(text);
		return message;
	};

	const BusinessMapValidation = (text) => {
		// if validation fails, return false else true
		let message = false;
		if (text.length == 0) {
			message = 'Map Location is Required';
		}
		setBusinessMap(text);
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

			{/* Contact Email */}
			<TextInputLine
				index={2}
				label='Contact Email'
				value={contactEmail}
				placeholder='i.e. email@example.com'
				validate={ContactEmailValidation}
				error={isValidated.contact_email}
			/>

			{/* Business Name */}
			<TextInputLine
				index={3}
				label='Business Name'
				value={businessName}
				placeholder='i.e. Student Biryani, Branch 2'
				validate={BusinessNameValidation}
				error={isValidated.business_name}
			/>

			{/* Business Address */}
			<TextInputLine
				index={4}
				label='Business Address'
				value={businessAddress}
				placeholder='i.e. Gulshan e Iqbal 13-B'
				validate={BusinessAddressValidation}
				error={isValidated.business_address}
			/>

			{/* Business Map */}
			<TextInputLine
				index={5}
				label='Google Map Link'
				value={businessMap}
				placeholder='i.e. https://maps.app.goo.gl/vvAkDEKa4dVSoM3P7'
				validate={BusinessMapValidation}
				error={isValidated.business_map}
			/>
		</View>
	);
};

export default VendorForm;
