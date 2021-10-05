import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from './styles';

const TextInputLine = ({ label, value, validate, index, placeholder }) => {
	const [text, setText] = useState(value);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState('');
	const [inputStyle, setInputStyle] = useState(styles.inputTextDefault);
	const [labelStyle, setLabelStyle] = useState(styles.labelText);

	const validateHandler = () => {
		const message = validate(text);
		if (message) {
			setIsError(true);
			setError(message);
			setInputStyle([styles.inputTextDefault, styles.inputTextError]);
			setLabelStyle(styles.labelTextError);
		} else {
			setIsError(false);
			setError('');
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
				index % 2 == 0 ? styles.evenChild : styles.oddChild,
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
			/>
			{isError ? (
				<View style={styles.errorBox}>
					<Text style={styles.errorText}>{error}</Text>
				</View>
			) : null}
		</View>
	);
};

export default TextInputLine;
