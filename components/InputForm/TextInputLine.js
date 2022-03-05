import React, { useState, useEffect } from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from './styles';

const TextInputLine = ({
	label,
	value,
	validate,
	index,
	placeholder,
	error,
}) => {
	const [text, setText] = useState(value);
	const [isError, setIsError] = useState(false);
	const [errorText, setErrorText] = useState('');
	const [inputStyle, setInputStyle] = useState(styles.inputTextDefault);

	useEffect(() => {
		if (typeof error == 'string') {
			validateHandler();
		} else {
			UnhighlightError();
		}
	}, [error]);

	const validateHandler = () => {
		const message = typeof error == 'string' ? error : validate(text);
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
		setInputStyle([styles.inputTextDefault, styles.inputTextFocused]);
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
				value={text}
				placeholder={placeholder}
				onChangeText={(text) => setText(text)}
				onFocus={onFocusHandler}
				onBlur={validateHandler}
				onSubmitEditing={validateHandler}
				multiline
			/>
			{isError ? (
				<View style={styles.errorBox}>
					<Text style={styles.errorText}>{errorText}</Text>
				</View>
			) : null}
		</View>
	);
};

export default TextInputLine;
