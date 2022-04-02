import React, { useState } from "react";
import { Alert, Modal, LogBox, ScrollView,StyleSheet, Text, Pressable, View } from "react-native";
import { StatusBar } from 'expo-status-bar';

import GlobalStyles from '../../styles/GlobalStyles';
import { TextInput } from 'react-native-gesture-handler';
import {styles} from '../styles';
import ActionBox from '../ActionBox';
import modStyles from './styles';

const InputModal = (props) => {
	const { modalVisible, setModalVisible, onPress} = props;
	const [selectedDropOff, setSelectedDropOff] = useState("");
	const [dropoffLocation, setDropoffLocation] = useState("");
	LogBox.ignoreLogs([
		'Non-serializable values were found in the navigation state',
	]);
    return(
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
		<View style={modStyles.modalView}>
			<StatusBar style='dark' />
			<TextInput style={modStyles.input} placeholder='Type dropoff location' onChangeText={setDropoffLocation} />

			<ActionBox 
			type="primary"
			title="Enter"
			action = {()=>{onPress(dropoffLocation)}}
			/>
		</View>
		  </Modal>
    );
}

export default InputModal;