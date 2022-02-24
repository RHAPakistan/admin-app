import moment from 'moment';
import React from 'react';
import { View } from 'react-native';
import GlobalStyles from '../../../styles/GlobalStyles';

import TextLine from '../TextLine';
import TextDescription from "../TextDescription";


const InductionDetails = ({ data }) => {
	const LocationButtonHandler = () => {
		console.log('Location:', data.business_map);
	};

	return (
		<View>
			{/* Name of Induction */}
			<TextLine index={0} label='Name' value={data.name} />

			{/* Phone number of Induction */}
			<TextLine index={1} label='Phone' value={data.phone} />

			{/* Email of Induction */}
			<TextLine index={2} label='Email' value={data.email} />

			{/* CNIC of Induction */}
			<TextLine index={3} label='CNIC' value={data.cnic} />

			{/* Date of Birth of Induction */}
			<TextLine index={4} label='Date of Birth' value={data.birth_date} />

			{/* Home Address of Induction */}
			<TextLine index={5} label='Home Address' value={data.address} />

			{/* Workplace of Induction */}
			<TextLine index={6} label='Workplace' value={data.workplace} />

			{/* Facebook of Induction */}
			<TextLine index={7} label='Facebook' value={data.facebook} />

			{/* Emergency Contact */}
			<TextLine
				index={8}
				label='Emergency Contact'
				value={data.emergency_contact}
			/>

			{/* Relation with contact */}
			<TextLine
				index={9}
				label='Relation with Contact'
				value={data.emergency_relation}
			/>

			{/* Workplace of Induction */}
			<TextLine
				index={10}
				label='Allergy/Medical Condition'
				value={data.conditions}
			/>

			{/* Workplace of Induction */}
			<TextLine index={11} label='Covid Vaccinated' value={data.vaccinated} />

			<View style={GlobalStyles.hrGrey}></View>

			{/* Contacts working in RHA */}
			<TextDescription
				index={12}
				label='Contacts working in RHA'
				value={data.contacts_rha}
			/>

			{/* Volunteering Experience */}
			<TextLine
				index={13}
				label='Volunteering Experience'
				value={data.experience}
			/>

			{/* Interest in RHA */}
			<TextDescription
				index={14}
				label='Why interested to work with us?'
				value={data.interest}
			/>

			{/* Suitable Time */}
			<TextLine
				index={15}
				label='Suitable Time'
				value={data.suitable_time}
			/>

			{/* QA */}
			<TextDescription
				index={16}
				label='Anything you want to ask?'
				value={data.questions}
			/>

			{/* Contacts working in RHA */}
			<TextDescription
				index={15}
				label='Contacts working in RHA'
				value={data.contacts_rha}
			/>
		</View>
	);
};

export default InductionDetails;
