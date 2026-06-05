import React from "react";
import { StyleSheet, Text, TextInput, View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

const InputField = ({ label, placeholder, keyboardType = "default", autoCapitalize = "none", autoCorrect = false, ...props }) => {
	const theme = useColorScheme() ?? "light";
	const colors = Colors[theme];

	return (
		<View style={styles.inputWrapper}>
			<Text
				style={[
					styles.inputLabel,
					{
						color: colors.textSecondary,
					},
				]}>
				{label}
			</Text>

			<TextInput
				placeholder={placeholder}
				placeholderTextColor={colors.placeholder}
				keyboardType={keyboardType}
				autoCapitalize={autoCapitalize}
				autoCorrect={autoCorrect}
				style={[
					styles.input,
					{
						color: colors.text,
						backgroundColor: colors.inputBackground,
						borderColor: colors.inputBorder,
					},
				]}
				{...props}
			/>
		</View>
	);
};

export default InputField;

const styles = StyleSheet.create({
	inputWrapper: {
		marginBottom: 18,
	},
	inputLabel: {
		fontSize: 16,
		fontWeight: "600",
		marginBottom: 8,
	},
	input: {
		height: 55,
		borderRadius: 14,
		paddingHorizontal: 16,
		borderWidth: 1,
	},
});
