import { StyleSheet } from 'react-native';
import Colors from './Colors';

const headerHeight = 56;
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

	drawerHeader: {
		backgroundColor: Colors.green,
		height: 160,
		flex: 1,
		flexDirection: 'column-reverse',
	},

	drawerHeaderTitle: {
		margin: 16,
	},

	drawerHeaderName: {
		color: Colors.white,
		fontWeight: '700',
		fontSize: 20,
	},

	drawerHeaderPhone: {
		color: Colors.white,
		fontWeight: '300',
		fontSize: 16,
	},

	headerButton: {
		height: headerHeight,
		width: headerHeight,
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

	selectOptions: {
		marginVertical: 8,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	selectLabelWrap: {
		justifyContent: 'center',
	},

	selectLabel: {
		fontSize: 21,
		fontWeight: 'bold',
	},

	selectButtonWrap: {
		flex: 1,
		maxWidth: '75%',
	},

	selectButton: {
		width: '100%',
		height: 50,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: 'black',
		backgroundColor: Colors.white,
	},

	selectDropdown: {
		borderRadius: 8,
		marginTop: 8,
	},

	bgGreen: {
		backgroundColor: Colors.green,
	},
});

export default GlobalStyles;
