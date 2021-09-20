import { StyleSheet } from 'react-native';

import Colors from '../../styles/Colors';

const buttonElevation = 3;
const styles = StyleSheet.create({
	list: {
		borderTopColor: Colors.grey,
		borderTopWidth: 2,
		paddingBottom: 24,
		marginHorizontal: 16,
	},

	button: {
		borderRadius: 8,
		backgroundColor: Colors.white,
		marginTop: 8,
		paddingVertical: 8,
		paddingHorizontal: 16,
		shadowColor: Colors.black,
		shadowOffset: { width: 0, height: 0.5 * buttonElevation },
		shadowOpacity: 0.3,
		shadowRadius: 0.8 * buttonElevation,
		elevation: buttonElevation,
	},

	buttonHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	buttonTitleText: {
		color: Colors.black,
		fontSize: 20,
		fontWeight: 'bold',
	},

	buttonInfoText: {
		color: Colors.grey,
		fontSize: 16,
	},

	activeButton: {
		borderWidth: 2,
		borderColor: Colors.green,
	},

	activeButtonTitle: {
		color: Colors.green,
		fontSize: 20,
		fontWeight: 'bold',
	},
	activeButtonInfo: {
		color: Colors.black,
		fontSize: 16,
	},
});

export default styles;
