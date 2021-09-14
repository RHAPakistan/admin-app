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
