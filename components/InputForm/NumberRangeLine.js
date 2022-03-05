import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, Dimensions } from 'react-native';

import styles from './styles';

let width = Dimensions.get('screen').width;
width = (width - 48) / 2;

const NumberRangeLine = ({ label, value, validate, index, error }) => {
	const [MinValue, setMinValue] = useState(value.min);
	const [MaxValue, setMaxValue] = useState(value.max);
	const [isError, setIsError] = useState(false);
	const [errorText, setErrorText] = useState('');
	const [MinStyle, setMinStyle] = useState(styles.inputTextDefault);
	const [MaxStyle, setMaxStyle] = useState(styles.inputTextDefault);

	useEffect(() => {
		if (typeof error == 'string') {
			validateHandler(error);
		} else {
			UnhighlightError();
		}
	}, [error]);

	const validateHandler = () => {
		const message =
			typeof error == 'string' ? error : validate(MinValue, MaxValue);
		if (message) {
			HighlightError(message);
		} else {
			UnhighlightError();
		}
	};

	const HighlightError = (message) => {
		setIsError(true);
		setErrorText(message);
		setMinStyle([styles.inputTextDefault, styles.inputTextError]);
		setMaxStyle([styles.inputTextDefault, styles.inputTextError]);
	};

	const UnhighlightError = () => {
		setIsError(false);
		setErrorText('');
		setMinStyle(styles.inputTextDefault);
		setMaxStyle(styles.inputTextDefault);
	};

	const onMinFocusHandler = () => {
		setMinStyle([styles.inputTextDefault, styles.inputTextFocused]);
	};

	const onMaxFocusHandler = () => {
		setMaxStyle([styles.inputTextDefault, styles.inputTextFocused]);
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
			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
				<TextInput
					style={[MinStyle, { width }]}
					value={MinValue}
					placeholder='min'
					onChangeText={(text) => setMinValue(text)}
					onFocus={onMinFocusHandler}
					onBlur={validateHandler}
					onSubmitEditing={validateHandler}
					keyboardType='numeric'
				/>
				<TextInput
					style={[MaxStyle, { width }]}
					value={MaxValue}
					placeholder='max'
					onChangeText={(text) => setMaxValue(text)}
					onFocus={onMaxFocusHandler}
					onBlur={validateHandler}
					onSubmitEditing={validateHandler}
					keyboardType='numeric'
				/>
			</View>
			{isError ? (
				<View style={styles.errorBox}>
					<Text style={styles.errorText}>{errorText}</Text>
				</View>
			) : null}
		</View>
	);
};

export default NumberRangeLine;
