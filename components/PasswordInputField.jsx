import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

const PasswordInputField = ({ label = "Password", placeholder = "Enter your password", ...props }) => {
	const theme = useColorScheme() ?? "light";
	const colors = Colors[theme];
	const [showPassword, setShowPassword] = useState(false);

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

			<View
				style={[
					styles.passwordContainer,
					{
						backgroundColor: colors.inputBackground,
						borderColor: colors.inputBorder,
					},
				]}>
				<TextInput
					placeholder={placeholder}
					placeholderTextColor={colors.placeholder}
					secureTextEntry={!showPassword}
					style={[
						styles.passwordInput,
						{
							color: colors.text,
						},
					]}
					{...props}
				/>

				<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
					<FontAwesome6
						name={showPassword ? "eye-slash" : "eye"}
						size={18}
						color={colors.textSecondary}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default PasswordInputField;

const styles = StyleSheet.create({
	inputWrapper: {
		marginBottom: 18,
	},
	inputLabel: {
		fontSize: 16,
		fontWeight: "600",
		marginBottom: 8,
	},
	passwordContainer: {
		height: 55,
		borderRadius: 14,
		borderWidth: 1,
		paddingHorizontal: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	passwordInput: {
		flex: 1,
		height: "100%",
	},
});
