import { StyleSheet } from 'react-native';
import Colors from './Colors';

const GlobalStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.ashWhite,
		paddingTop: 8,
	},

	center: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	screenTitle: {
		borderBottomColor: Colors.green,
		borderBottomWidth: 2,
		paddingVertical: 4,
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 16,
	},

	screenTitleText: {
		fontSize: 24,
		fontWeight: '700',
		color: Colors.green,
		flex: 1,
	},

	screenTitleButton: {
		backgroundColor: Colors.green,
		borderRadius: 8,
	},

	bgGreen: {
		backgroundColor: Colors.green,
	},

	bgRed: {
		backgroundColor: Colors.red,
	},

	MediumButton: {
		width: 120,
		height: 40,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},

	LargeButton: {
		width: 240,
		height: 48,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},

	MediumButtonTitle: {
		color: Colors.white,
		fontSize: 16,
	},

	LargeButtonTitle: {
		color: Colors.white,
		fontSize: 18,
	},
});

export default GlobalStyles;
