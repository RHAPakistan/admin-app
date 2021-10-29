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
	const [labelStyle, setLabelStyle] = useState(styles.labelText);

	useEffect(() => {
		if (error) {
			setIsError(true);
			setErrorText(error);
		} else {
			setIsError(false);
			setErrorText('');
		}
	}, [error]);

	const validateHandler = () => {
		const message = validate(text);
		if (message) {
			setIsError(true);
			setErrorText(message);
			setInputStyle([styles.inputTextDefault, styles.inputTextError]);
			setLabelStyle(styles.labelTextError);
		} else {
			setIsError(false);
			setErrorText('');
			setInputStyle(styles.inputTextDefault);
			setLabelStyle(styles.labelText);
		}
	};

	const onFocusHandler = () => {
		setInputStyle([styles.inputTextDefault, styles.inputTextFocused]);
		setLabelStyle(styles.labelTextFocused);
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
