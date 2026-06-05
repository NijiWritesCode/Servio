import React from "react";
import { StyleSheet, Text, TouchableOpacity, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

const PrimaryButton = ({ title, onPress, style }) => {
	const theme = useColorScheme() ?? "light";
	const colors = Colors[theme];

	return (
		<TouchableOpacity
			onPress={onPress}
			style={[
				styles.button,
				{
					backgroundColor: colors.primaryButtonBackground,
				},
				style
			]}>
			<Text
				style={[
					styles.buttonText,
					{
						color: colors.primaryButtonText,
					},
				]}>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default PrimaryButton;

const styles = StyleSheet.create({
	button: {
		height: 55,
		borderRadius: 14,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 24,
	},
	buttonText: {
		fontSize: 17,
		fontWeight: "700",
	},
});
