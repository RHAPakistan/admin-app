import React, { useState } from 'react';
import { View } from 'react-native';
import TextInputLine from '../TextInputLine';

const DriveForm = ({ data, setData }) => {
	const [title, setTitle] = useState('');
	const [location, setLocation] = useState('');

	const TitleValidation = (text) => {
		// if validation fails, return false else true
		if (text.length == 0) {
			return 'Title Should not be Empty';
		}
		return false;
	};

	const LocationValidation = (text) => {
		// if validation fails, return false else true
		if (text.length == 0) {
			return 'Location should not be Empty';
		}
		return false;
	};
	return (
		<View>
			{/* Title */}
			<TextInputLine
				index={1}
				label='Title'
				value={title}
				placeholder='i.e. Donut Drive, XYZ School'
				validate={TitleValidation}
			/>

			{/* Location */}
			<TextInputLine
				index={2}
				label={'Drive Location'}
				value={location}
				placeholder='i.e. ABC School, Nazimababad'
				validate={LocationValidation}
			/>
		</View>
	);
};

export default DriveForm;
