import React from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

const Divider = ({ text = "OR" }) => {
	const theme = useColorScheme() ?? "light";
	const colors = Colors[theme];

	return (
		<View style={styles.dividerContainer}>
			<View 
				style={[
					styles.dividerLine,
					{
						backgroundColor: colors.divider,
					}
				]} 
			/>
			<Text
				style={[
					styles.dividerText,
					{
						color: colors.textSecondary,
					},
				]}>
				{text}
			</Text>
			<View 
				style={[
					styles.dividerLine,
					{
						backgroundColor: colors.divider,
					}
				]} 
			/>
		</View>
	);
};

export default Divider;

const styles = StyleSheet.create({
	dividerContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 28,
	},
	dividerLine: {
		flex: 1,
		height: 1,
	},
	dividerText: {
		marginHorizontal: 12,
		fontWeight: "600",
	},
});
