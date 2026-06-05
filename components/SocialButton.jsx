import React from "react";
import { StyleSheet, Text, TouchableOpacity, useColorScheme } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

const SocialButton = ({ title, iconName, onPress }) => {
	const theme = useColorScheme() ?? "light";
	const colors = Colors[theme];

	return (
		<TouchableOpacity 
			onPress={onPress}
			style={[
				styles.button,
				{
					borderColor: colors.socialButtonBorder,
				}
			]}>
			<FontAwesome6 name={iconName} size={20} color={colors.tint} />
			<Text
				style={[
					styles.buttonText,
					{
						color: colors.socialButtonText,
					},
				]}>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default SocialButton;

const styles = StyleSheet.create({
	button: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 12,
		height: 55,
		borderRadius: 30,
		borderWidth: 1,
	},
	buttonText: {
		fontSize: 15,
		fontWeight: "600",
	},
});
