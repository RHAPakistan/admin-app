import React from 'react';
import { Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';

import GlobalStyles from '../styles/GlobalStyles';

const SelectOptions = ({ label, data }) => {
	return (
		<View style={GlobalStyles.selectOptions}>
			<View style={GlobalStyles.selectLabelWrap}>
				<Text style={GlobalStyles.selectLabel}>{label + ':'}</Text>
			</View>

			<View style={GlobalStyles.selectButtonWrap}>
				<SelectDropdown
					data={data}
					buttonStyle={GlobalStyles.selectButton}
					dropdownStyle={GlobalStyles.selectDropdown}
					defaultValueByIndex={0}
					statusBarTranslucent={true}
					renderDropdownIcon={() => (
						<Entypo name='chevron-down' size={24} color='black' />
					)}
					dropdownIconPosition='right'
					onSelect={(selectedItem, index) => {
						console.log(selectedItem, index);
					}}
					buttonTextAfterSelection={(selectedItem, index) => {
						return selectedItem;
					}}
					rowTextForSelection={(item, index) => {
						return item;
					}}
				/>
			</View>
		</View>
	);
};

export default SelectOptions;
