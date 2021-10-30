import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
	container: {
		marginVertical: 8,
		marginHorizontal: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	inputBoxWrap: {
		flex: 1,
	},

	inputBox: {
		width: '100%',
		height: 50,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: Colors.lightGrey,
		backgroundColor: Colors.white,
		fontSize: 16,
		paddingHorizontal: 8,
	},
});

export default styles;
