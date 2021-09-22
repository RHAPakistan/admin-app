import React, { useEffect, useState, useContext } from 'react';
import { View } from 'react-native';

import DismissedContext from '../../contexts/DismissedContext';
import styles from './styles';

const ButtonList = ({ action, children, data }) => {
	const [activeKey, setActiveKey] = useState(-1);
	const { dismissed, clearDismissed } = useContext(DismissedContext);

	// when user click outside the list, so clear the active buttons
	useEffect(() => {
		setActiveKey(-1);
		clearDismissed();
	}, [dismissed]);

	// move to the pickup details screen
	useEffect(() => {
		if (activeKey > 0) {
			action(activeKey);
		}
	}, [activeKey]);

	return (
		<View style={styles.list}>
			{data.map((item) => (
				<View key={item.id}>
					{React.cloneElement(children, {
						data: item,
						action: () => setActiveKey(item.id),
						isActive: activeKey === item.id,
					})}
				</View>
			))}
		</View>
	);
};

export default ButtonList;
