import React, { useState, useEffect } from 'react';
import { Text, Pressable, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import moment from 'moment';
moment().format();

import GlobalStyles from '../../../styles/GlobalStyles';
import styles from '../styles';

const StyledButton = ({ title, action, type, disabled }) => {
	let ButtonStyle, TitleStyle;

	if (type === 'outlined') {
		ButtonStyle = [
			GlobalStyles.LargeButton,
			GlobalStyles.ButtonGreenOutlined,
			{ width: '100%' },
		];
		TitleStyle = [
			GlobalStyles.LargeButtonTitle,
			GlobalStyles.ButtonGreenOutlinedTitle,
		];
	} else if (type === 'primary') {
		ButtonStyle = [
			GlobalStyles.MediumButton,
			disabled ? GlobalStyles.bgGrey : GlobalStyles.bgGreen,
		];
		TitleStyle = GlobalStyles.MediumButtonTitle;
	} else {
		ButtonStyle = GlobalStyles.MediumButton;
		TitleStyle = [
			GlobalStyles.MediumButtonTitle,
			GlobalStyles.ButtonGreenOutlinedTitle,
		];
	}
	return (
		<Pressable
			onPress={action}
			style={ButtonStyle}
			android_ripple
			disabled={disabled}>
			<Text style={[TitleStyle]}>{title}</Text>
		</Pressable>
	);
};

const ModalContent = ({ onClose, onConfirm, value }) => {
	const [dateValue, setDateValue] = useState('Date');
	const [timeValue, setTimeValue] = useState('Time');
	const [isEnabled, setEnabled] = useState(false);

	const prevDate = value ? value : new Date();
	const [date, setDate] = useState(prevDate);
	const [mode, setMode] = useState('');
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (value) {
			setDateValue(moment(value).format('dddd DD MMMM, YYYY'));
			setTimeValue(moment(value).format('LT'));
		}
	}, []);

	useEffect(() => {
		if (mode === 'date') {
			setDateValue(moment(date).format('dddd DD MMMM, YYYY'));
		}
		if (mode === 'time') {
			setTimeValue(moment(date).format('LT'));
		}

		setEnabled(moment(prevDate).format('LLLL') !== moment(date).format('LLLL'));
	}, [date]);

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate || date;
		setShow(Platform.OS === 'ios');
		setDate(currentDate);
	};

	const DateHandler = () => {
		setMode('date');
		setShow(true);
	};

	const TimeHandler = () => {
		setMode('time');
		setShow(true);
	};

	const ConfirmHandler = () => {
		onConfirm(date);
		onClose();
	};

	return (
		<Pressable onPress={onClose} style={styles.ModalBackground}>
			<Pressable style={styles.ModalBody}>
				<View style={styles.ModalHeader}>
					<Text style={styles.ModalHeaderTitle}>Select Date and Time</Text>
				</View>
				<View style={styles.ModalContainer}>
					<StyledButton
						type='outlined'
						title={dateValue}
						action={DateHandler}
					/>
					<StyledButton
						type='outlined'
						title={timeValue}
						action={TimeHandler}
					/>
				</View>
				<View style={styles.ModalControls}>
					<StyledButton
						type='primary'
						title='Confirm'
						action={ConfirmHandler}
						disabled={!isEnabled}
					/>
					<StyledButton title='Cancel' action={onClose} />
				</View>
				{show && (
					<DateTimePicker
						value={date}
						mode={mode}
						// is24Hour={true}
						display='spinner'
						onChange={onChange}
						minimumDate={new Date()}
						minuteInterval={15}
					/>
				)}
			</Pressable>
		</Pressable>
	);
};

export default ModalContent;
