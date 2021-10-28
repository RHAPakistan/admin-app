import { StyleSheet } from 'react-native';

import Colors from '../../styles/Colors';
const styles = StyleSheet.create({
	line: {
		marginHorizontal: 16,
		paddingVertical: 2,
	},

	evenChild: {
		backgroundColor: Colors.grey94,
	},

	oddChild: {
		backgroundColor: Colors.ashWhite,
	},

	labelBox: {
		height: 20,
		marginVertical: 2,
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

	errorBox: {
		marginVertical: 2,
	},

	errorText: {
		color: Colors.red,
	},

	ModalBackground: {
		backgroundColor: 'rgba(0,0,0,0.8)',
		flex: 1,
		justifyContent: 'center',
	},

	ModalBody: {
		backgroundColor: Colors.ashWhite,
		margin: 16,
		borderRadius: 16,
		paddingHorizontal: 16,
		paddingVertical: 8,
	},

	ModalHeader: {
		alignItems: 'center',
		borderBottomWidth: 2,
		borderBottomColor: Colors.grey,
		paddingBottom: 4,
	},

	ModalHeaderTitle: {
		fontSize: 21,
		fontWeight: '700',
		color: Colors.green,
	},

	ModalContainer: {
		marginVertical: 16,
		height: 104,
		justifyContent: 'space-between',
	},

	ModalControls: {
		flexDirection: 'row-reverse',
		// justifyContent: 'space-between',
		paddingTop: 8,
		borderTopWidth: 2,
		borderTopColor: Colors.grey,
	},
});

export default styles;
