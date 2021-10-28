import React, { useRef, useState, useEffect } from 'react';
import { Modal, Text, TextInput, Pressable, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
moment().format();

import styles from './styles';
import GlobalStyles from '../../styles/GlobalStyles';

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

const DateTimeModal = ({ label, value, validate, index }) => {
	const [text, setText] = useState(null);
	const [date, setDate] = useState(null);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState('');
	const [inputStyle, setInputStyle] = useState(styles.inputTextDefault);
	const [labelStyle, setLabelStyle] = useState(styles.labelText);
	const [modalVisible, setModalVisible] = useState(false);

	const refTextInput = useRef();

	useEffect(() => {
		if (value) {
			setDate(moment(value));
		}
	}, []);

	const validateHandler = () => {
		const message = validate(date);
		if (message) {
			setIsError(true);
			setError(message);
			setInputStyle([styles.inputTextDefault, styles.inputTextError]);
			setLabelStyle(styles.labelTextError);
		} else {
			setIsError(false);
			setError('');
		}
	};

	const onFocusHandler = () => {
		setModalVisible(true);
		refTextInput.current.blur();
	};

	const onBlurHandler = () => {
		setInputStyle(styles.inputTextDefault);
		setLabelStyle(styles.labelText);
	};

	const ModalCloseHandler = () => {
		setModalVisible(false);
	};

	const ModalConfirmHandler = (newDate) => {
		setDate(newDate);
		setText(moment(newDate).format('LLLL'));
		validateHandler();
	};

	return (
		<View
			style={[
				styles.line,
				index % 2 == 0 ? styles.oddChild : styles.evenChild,
			]}>
			<View style={styles.labelBox}>
				<Text style={labelStyle}>{label}:</Text>
			</View>
			<TextInput
				style={inputStyle}
				value={text}
				placeholder='i.e. 19/10/2021 3:00 AM'
				showSoftInputOnFocus={false}
				onFocus={onFocusHandler}
				onBlur={onBlurHandler}
				ref={refTextInput}
			/>
			{isError ? (
				<View style={styles.errorBox}>
					<Text style={styles.errorText}>{error}</Text>
				</View>
			) : null}

			<Modal
				transparent={true}
				visible={modalVisible}
				onRequestClose={ModalCloseHandler}>
				<ModalContent
					onConfirm={ModalConfirmHandler}
					onClose={ModalCloseHandler}
					value={date}
				/>
			</Modal>
		</View>
	);
};

export default DateTimeModal;
