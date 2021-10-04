import React from 'react';

import ButtonList from '../';
import DriveButton from './DriveButton';

const DriveList = ({ action, dismissed, clearDismissed, status }) => {
	// Fetch Data Here
	const data = [
		{
			id: 1,
			title: 'ABC',
			date: '01 July, 2021',
			address: 'Plot 111, XYZ Street',
		},
		{
			id: 2,
			title: 'FGH',
			date: '02 July, 2021',
			address: 'Plot 222, XYZ Street',
		},
		{
			id: 3,
			title: 'IJK',
			date: '03 July, 2021',
			address: 'Plot 333, XYZ Street',
		},
		{
			id: 4,
			title: 'LMN',
			date: '04 July, 2021',
			address: 'Plot 444, XYZ Street',
		},
		{
			id: 5,
			title: 'OPQ',
			date: '05 July, 2021',
			address: 'Plot 555, XYZ Street',
		},
		{
			id: 6,
			title: 'RST',
			date: '06 July, 2021',
			address: 'Plot 666, XYZ Street',
		},
	];

	return (
		<ButtonList {...{ action, data, dismissed, clearDismissed }}>
			<DriveButton />
		</ButtonList>
	);
};

export default DriveList;
