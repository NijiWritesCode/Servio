import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, useColorScheme } from "react-native";
import { router } from "expo-router";

import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import { Colors } from "../constants/Colors";

const ForgotPassword = () => {
	const theme = useColorScheme() ?? "light";
	const colors = Colors[theme];

	return (
		<View
			style={[
				styles.container,
				{ backgroundColor: colors.background },
			]}
		>
			<View
				style={[
					styles.card,
					{ backgroundColor: colors.card },
				]}
			>
				<Text
					style={[
						styles.title,
						{ color: colors.text },
					]}
				>
					Forgot Password
				</Text>

				<Text
					style={[
						styles.subtitle,
						{ color: colors.textMuted },
					]}
				>
					Enter your email and we’ll send you a reset link
				</Text>

				<View style={styles.form}>
					<InputField 
						label="Email" 
						placeholder="you@example.com" 
						keyboardType="email-address" 
					/>

					<PrimaryButton 
						title="Send Reset Link" 
						style={{ marginTop: 10 }}
					/>

					<TouchableOpacity
						onPress={() => router.push("/login")}
						style={styles.backLink}
					>
						<Text
							style={{
								color: colors.link,
								fontWeight: "600",
							}}
						>
							Back to Login
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default ForgotPassword;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 20,
	},
	card: {
		borderRadius: 24,
		padding: 24,
	},
	title: {
		fontSize: 28,
		fontWeight: "700",
		textAlign: "center",
	},
	subtitle: {
		fontSize: 14,
		textAlign: "center",
		marginTop: 8,
		lineHeight: 20,
	},
	form: {
		marginTop: 30,
	},
	backLink: {
		marginTop: 20,
		alignItems: "center",
	},
});