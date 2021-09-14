import { Platform, StatusBar, StyleSheet } from 'react-native';
import Colors from './Colors';

const headerHeight = 56;
const GlobalStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.ashWhite,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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

	bgGreen: {
		backgroundColor: Colors.green,
	},
});

export default GlobalStyles;
