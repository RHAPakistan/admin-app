import { StyleSheet } from 'react-native';

import Colors from '../../styles/Colors';
const styles = StyleSheet.create({
	line: {
		marginHorizontal: 16,
	},

	evenChild: {
		backgroundColor: Colors.grey94,
	},

	oddChild: {
		backgroundColor: Colors.ashWhite,
	},

	labelBox: {
		height: 20,
		marginTop: 4,
		marginBottom: 2,
	},

	labelText: {
		fontSize: 16,
		fontWeight: '400',
		color: Colors.black,
	},

	labelTextFocused: {
		fontSize: 16,
		fontWeight: 'bold',
		color: Colors.green,
	},

	labelTextError: {
		fontSize: 16,
		fontWeight: 'bold',
		color: Colors.red,
	},

	inputTextDefault: {
		height: 36,
		borderWidth: 1,
		borderRadius: 4,
		borderColor: Colors.grey,
		backgroundColor: Colors.white,
		paddingHorizontal: 8,
		fontSize: 16,
	},

	inputTextFocused: {
		borderWidth: 2,
		borderColor: Colors.green,
	},

	inputTextError: {
		borderWidth: 2,
		borderColor: Colors.red,
	},

	textError: {
		borderWidth: 2,
		borderColor: Colors.red,
	},

	errorBox: { marginVertical: 2 },

	errorText: {
		color: Colors.red,
	},
});

export default styles;
