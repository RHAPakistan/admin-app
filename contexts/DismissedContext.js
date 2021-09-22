import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

const DismissedContext = React.createContext({
	dismissed: false,
	clearDismissed: () => {},
});

// This Component is use to get alert when user
// click outside thetouchable area or screen to
// hide the keyboard or to deselect some buttons
export const DismissedWrap = (props) => {
	const [dismissed, setDismissed] = useState(false);

	let context = {
		dismissed: dismissed,
		clearDismissed: () => setDismissed(false),
	};

	return (
		<DismissedContext.Provider value={context}>
			<TouchableWithoutFeedback onPress={() => setDismissed(true)}>
				{props.children}
			</TouchableWithoutFeedback>
		</DismissedContext.Provider>
	);
};

export default DismissedContext;
