import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import PickupButton from './PickupButton';
import styles from './styles';

const PickupList = ({ status, dismissed, clearDismissed, action }) => {
	const data = [1, 2, 3, 4, 5, 6, 7, 8];
	const [activeKey, setActiveKey] = useState(-1);

	// when user click outside the list, so clear the active buttons
	useEffect(() => {
		setActiveKey(-1);
		clearDismissed();
	}, [status, dismissed]);

	// move to the pickup details screen
	useEffect(() => {
		if (activeKey > 0) {
			action(activeKey);
		}
	}, [activeKey]);

	return (
		<View style={styles.list}>
			{data.map((item) => (
				<View key={item}>
					<PickupButton
						item={item}
						action={() => setActiveKey(item)}
						isActive={activeKey === item}
					/>
				</View>
			))}
		</View>
	);
};

export default PickupList;
