import React from 'react';
import { Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';

import styles from './styles';
import Colors from '../../styles/Colors';

const SelectOptions = ({ setValue, label, data }) => {
	return (
		<View style={styles.selectOptions}>
			<View style={styles.selectLabelWrap}>
				<Text style={styles.selectLabel}>{label + ':'}</Text>
			</View>

			<View style={styles.selectButtonWrap}>
				<SelectDropdown
					data={data}
					buttonStyle={styles.selectButton}
					dropdownStyle={styles.selectDropdown}
					defaultValueByIndex={0}
					statusBarTranslucent={true}
					renderDropdownIcon={() => (
						<Entypo name='chevron-down' size={24} color={Colors.black} />
					)}
					dropdownIconPosition='right'
					onSelect={(selectedItem, index) => {
						setValue([selectedItem, index]);
					}}
				/>
			</View>
		</View>
	);
};

export default SelectOptions;
