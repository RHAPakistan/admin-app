import React, { useRef, useState, useEffect } from 'react';
import { Modal, Text, TextInput, View } from 'react-native';
import moment from 'moment';
moment().format();

import ModalContent from './ModalContent';
import styles from '../styles';

const DateTimeModal = ({ label, value, validate, index, error }) => {
	const [date, setDate] = useState(null);
	const [isError, setIsError] = useState(null);
	const [errorText, setErrorText] = useState('');
	const [inputStyle, setInputStyle] = useState(styles.inputTextDefault);
	const [modalVisible, setModalVisible] = useState(false);

	const refTextInput = useRef();

	useEffect(() => {
		if (value) {
			setDate(value);
		}
	}, []);

	useEffect(() => {
		if (date) {
			validateHandler();
		}
	}, [date]);

	useEffect(() => {
		if (error) {
			HighlightError(error);
		} else {
			UnhighlightError();
		}
	}, [error]);

	const validateHandler = () => {
		const message = validate(date);
		if (message) {
			HighlightError(message);
		} else {
			UnhighlightError();
		}
	};

	const HighlightError = (message) => {
		setIsError(true);
		setErrorText(message);
		setInputStyle([styles.inputTextDefault, styles.inputTextError]);
	};

	const UnhighlightError = () => {
		setIsError(false);
		setErrorText('');
		setInputStyle(styles.inputTextDefault);
	};

	const onFocusHandler = () => {
		setModalVisible(true);
		refTextInput.current.blur();
	};

	const onBlurHandler = () => {
		setInputStyle(styles.inputTextDefault);
	};

	const ModalCloseHandler = () => {
		setModalVisible(false);
	};

	const ModalConfirmHandler = (newDate) => {
		setDate(newDate);
	};

	return (
		<View
			style={[
				styles.line,
				index % 2 == 0 ? styles.oddChild : styles.evenChild,
			]}>
			<View style={styles.labelBox}>
				<Text style={styles.labelText}>{label}:</Text>
			</View>
			<TextInput
				style={inputStyle}
				value={date ? moment(date).format('LLLL') : null}
				placeholder='i.e. 19/10/2021 3:00 AM'
				showSoftInputOnFocus={false}
				onFocus={onFocusHandler}
				onBlur={onBlurHandler}
				ref={refTextInput}
			/>
			{isError ? (
				<View style={styles.errorBox}>
					<Text style={styles.errorText}>{errorText}</Text>
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
