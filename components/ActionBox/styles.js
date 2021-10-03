import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		paddingVertical: 4,
	},

	primaryButton: {
		width: 240,
		height: 48,
		borderRadius: 8,
		backgroundColor: Colors.green,
		justifyContent: 'center',
		alignItems: 'center',
	},

	cancelButton: {
		width: 240,
		height: 48,
		borderRadius: 8,
		backgroundColor: Colors.red,
		justifyContent: 'center',
		alignItems: 'center',
	},

	buttonTitle: {
		fontSize: 16,
		color: Colors.white,
	},
});

export default styles;
