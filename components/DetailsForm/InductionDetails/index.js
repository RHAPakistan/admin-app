import moment from 'moment';
import React from 'react';
import { View } from 'react-native';
import GlobalStyles from '../../../styles/GlobalStyles';
import ContactLine from '../../ContactLine'
import TextLine from '../TextLine';
import TextDescription from "../TextDescription";


const InductionDetails = ({ data }) => {
	// const LocationButtonHandler = () => {
	// 	console.log('Location:', data.business_map);
	// };
	return (
		<View>
			{/* Name of Induction */}
			<TextLine index={0} label='Full Name' value={data.fullname} />

			{/* Phone number of Induction */}
			{/* <TextLine index={1} label='Phone' value={data.contactNumber} /> */}
			<ContactLine index={1} label="Contact Phone" name={data.contactNumber} number={data.contactNumber}></ContactLine>

			{/* Email of Induction */}
			<TextLine index={2} label='Email' value={data.email} />

			{/* CNIC of Induction */}
			<TextLine index={3} label='CNIC' value={data.cnic} />

			{/* Date of Birth of Induction */}
			<TextLine index={4} label='Date of Birth' value={data.dob} />

			{/* Workplace of Induction */}
			<TextLine index={6} label='Occupation' value={data.occupation} />

			{/* Facebook of Induction */}
			<TextLine index={7} label='Facebook' value={data.fbLink} />
			
			{/* Suitable Time */}
			<TextLine
				index={15}
				label='Suitable Time'
				value={data.pickupTiming}
			/>

			{/* Emergency Contact */}
			<TextLine
				index={8}
				label='Emergency Contact'
				value={data.emergencyContact}
			/>

			{/* Relation with contact */}
			<TextLine
				index={9}
				label='Relation with Contact'
				value={data.relationEmergency}
			/>

			{/* Workplace of Induction */}
			<TextLine
				index={10}
				label='Allergy/Medical Condition'
				value={data.medicalCondition}
			/>

			{/* Workplace of Induction */}
			<TextLine index={11} label='Covid Vaccinated' value={data.isVacinated} />

			<View style={GlobalStyles.hrGrey}></View>

			{/* Home Address of Induction */}
			<TextDescription index={5} label='Home Address' value={data.address} />

			{/* Contacts working in RHA */}
			<TextDescription
				index={12}
				label='Where you heard about us?'
				value={data.heardRHAwhere}
			/>

			{/* Volunteering Experience */}
			<TextDescription
				index={13}
				label='Volunteering Experience'
				value={data.volunteeredOrganizations}
			/>

			{/* Interest in RHA */}
			<TextDescription
				index={14}
				label='Why interested to work with us?'
				value={data.reasonForApply}
			/>


			{/* QA */}
			<TextDescription
				index={16}
				label='Anything you want to ask?'
				value={data.questions}
			/>

			{/* Contacts working in RHA */}
			<TextDescription
				index={17}
				label='Contacts working in RHA'
				value={data.contactsInRha}
			/>
			
			<TextDescription
				index={18}
				label='Skills that would benefit RHA'
				value={data.skills}
			/>
		</View>
	);
};

export default InductionDetails;
