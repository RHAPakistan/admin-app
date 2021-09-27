import React from 'react';

import PickupButton from './PickupButton';
import ButtonList from '../';

const PickupList = ({ action, dismissed, clearDismissed, status }) => {
	// fetch data here
	const data = [
		{ id: 1, time: '2m ago', address: 'Plot 111, XYZ Street' },
		{ id: 2, time: '5m ago', address: 'Plot 222, XYZ Street' },
		{ id: 3, time: '10m ago', address: 'Plot 333, XYZ Street' },
		{ id: 4, time: '15m ago', address: 'Plot 444, XYZ Street' },
		{ id: 5, time: '34m ago', address: 'Plot 555, XYZ Street' },
		{ id: 6, time: '1h 2m ago', address: 'Plot 666, XYZ Street' },
	];
	return (
		<ButtonList {...{ action, data, dismissed, clearDismissed }}>
			<PickupButton />
		</ButtonList>
	);
};

export default PickupList;
