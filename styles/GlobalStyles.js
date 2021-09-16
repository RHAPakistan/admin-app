import { StyleSheet } from 'react-native';
import Colors from './Colors';

const GlobalStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.ashWhite,
		paddingHorizontal: 16,
		paddingVertical: 8,
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
});

export default GlobalStyles;
