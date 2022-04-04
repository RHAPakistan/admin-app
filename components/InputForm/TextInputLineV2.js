import React, { useState,forwardRef,useImperativeHandle} from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from './styles';

const TextInputLine = forwardRef(({label,value,index,validate,placeholder},ref)=>{
	const [text, setText] = useState(value);
	const [error, setError] = useState(null);
	const [inputStyle, setInputStyle] = useState(styles.inputTextDefault);
	
	useImperativeHandle(ref,()=>({
		validate:ValidationHandler,
		getValues:()=>text
	}))

	// style related callbacks
	const RedColorHandler = () => {
		setInputStyle([styles.inputTextDefault, styles.inputTextError]);
	}

	const GreenColorHandler = () => {
		setInputStyle([styles.inputTextDefault, styles.inputTextFocused]);
	}

	const DefaultColorHandler = () => {
		setInputStyle(styles.inputTextDefault);
	}

	// Functionality related Callbacks
	const onFocusHandler = ()=>{
		GreenColorHandler()
		setError(null)
		console.log(ref)
	}

	const onBlurHandler = ()=>{
		ValidationHandler()
	}

	const onChangeHandler = (text)=>{
		setText(text)
	}

	const onSubmitHandler = ()=>{
		ValidationHandler()
	}

	const ValidationHandler = ()=>{
		const message = validate(text);
		setError(message)
		if(typeof message === "string"){
			RedColorHandler()
			return false
		} else {
			DefaultColorHandler()
		}
		return true
	}

	const BackgroundStyle = [styles.line,index % 2 == 0 ? styles.oddChild : styles.evenChild];

	return (
		<View style={BackgroundStyle}>
			<View style={styles.labelBox}>
				<Text style={styles.labelText}>{label}:</Text>
			</View>
			<TextInput
				style={inputStyle}
				value={text}
				placeholder={placeholder}
				onFocus={onFocusHandler}
				onBlur={onBlurHandler}
				onChangeText={onChangeHandler}
				onSubmitEditing={onSubmitHandler}
				multiline
			/>
			{typeof error === "string" ? (
				<View style={styles.errorBox}>
					<Text style={styles.errorText}>{error}</Text>
				</View>
			) : null}
		</View>
	)
})

export default TextInputLine