import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	useColorScheme,
} from "react-native";
import { router } from "expo-router";

const ForgotPassword = () => {
	const theme = useColorScheme();
	const isDark = theme === "dark";

	return (
		<View
			style={[
				styles.container,
				{ backgroundColor: isDark ? "#0B2B26" : "#bbffd4" },
			]}
		>
			<View
				style={[
					styles.card,
					{ backgroundColor: isDark ? "#16352F" : "#bbffd4" },
				]}
			>
				<Text
					style={[
						styles.title,
						{ color: isDark ? "#FFFFFF" : "#0B2B26" },
					]}
				>
					Forgot Password
				</Text>

				<Text
					style={[
						styles.subtitle,
						{ color: isDark ? "#A8B3AF" : "#4A5D52" },
					]}
				>
					Enter your email and we’ll send you a reset link
				</Text>

				<View style={styles.form}>
					<Text
						style={[
							styles.label,
							{ color: isDark ? "#D1D5DB" : "#273D2E" },
						]}
					>
						Email
					</Text>

					<TextInput
						placeholder="you@example.com"
						placeholderTextColor={isDark ? "#9CA3AF" : "#7D8B84"}
						keyboardType="email-address"
						autoCapitalize="none"
						style={[
							styles.input,
							{
								backgroundColor: isDark ? "#235347" : "#F4F7F4",
								color: isDark ? "#FFFFFF" : "#0B2B26",
								borderColor: isDark ? "#365A50" : "#D8E2DA",
							},
						]}
					/>

					<TouchableOpacity
						style={[
							styles.button,
							{
								backgroundColor: isDark ? "#bbffd4" : "#0B2B26",
							},
						]}
					>
						<Text
							style={[
								styles.buttonText,
								{
									color: isDark ? "#0B2B26" : "#FFFFFF",
								},
							]}
						>
							Send Reset Link
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => router.push("/login")}
						style={styles.backLink}
					>
						<Text
							style={{
								color: isDark ? "#8BB69B" : "#0B2B26",
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

	label: {
		fontSize: 15,
		fontWeight: "600",
		marginBottom: 8,
	},

	input: {
		height: 55,
		borderRadius: 14,
		paddingHorizontal: 16,
		borderWidth: 1,
		marginBottom: 20,
	},

	button: {
		height: 55,
		borderRadius: 14,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 10,
	},

	buttonText: {
		fontSize: 16,
		fontWeight: "700",
	},

	backLink: {
		marginTop: 20,
		alignItems: "center",
	},
});