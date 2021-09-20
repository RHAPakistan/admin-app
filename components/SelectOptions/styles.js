import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
	selectOptions: {
		marginVertical: 8,
		marginHorizontal: 16,
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
});

export default styles;
