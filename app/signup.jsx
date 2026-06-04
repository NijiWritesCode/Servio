import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme, ScrollView } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";

const Signup = () => {
	const theme = useColorScheme();
	const isDark = theme === "dark";

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={[
				styles.scrollContainer,
				{
					backgroundColor: isDark ? "#0B2B26" : "#bbffd4",
				},
			]}>
			<View
				style={[
					styles.container,
					{
						backgroundColor: isDark ? "#0B2B26" : "#bbffd4",
					},
				]}>
				<View
					style={[
						styles.card,
						{
							backgroundColor: isDark ? "#0B2B26" : "#bbffd4",
						},
					]}>
					<Text
						style={[
							styles.title,
							{
								color: isDark ? "#F5F5F5" : "#273D2E",
							},
						]}>
						Create Account
					</Text>

					<Text
						style={[
							styles.subTitle,
							{
								color: isDark ? "#A8B3AF" : "#5C6B63",
							},
						]}>
						Sign up to get started
					</Text>

					<View style={styles.form}>
						<View style={styles.inputWrapper}>
							<Text
								style={[
									styles.inputLabel,
									{
										color: isDark ? "#D1D5DB" : "#273D2E",
									},
								]}>
								Full Name
							</Text>

							<TextInput
								placeholder="Enter your full name"
								placeholderTextColor={isDark ? "#9CA3AF" : "#7D8B84"}
								style={[
									styles.input,
									{
										color: isDark ? "#FFFFFF" : "#273D2E",
										backgroundColor: isDark ? "#235347" : "#F4F7F4",
									},
								]}
							/>
						</View>

						<View style={styles.inputWrapper}>
							<Text
								style={[
									styles.inputLabel,
									{
										color: isDark ? "#D1D5DB" : "#273D2E",
									},
								]}>
								Email
							</Text>

							<TextInput
								placeholder="Enter your email"
								placeholderTextColor={isDark ? "#9CA3AF" : "#7D8B84"}
								keyboardType="email-address"
								autoCapitalize="none"
								style={[
									styles.input,
									{
										color: isDark ? "#FFFFFF" : "#273D2E",
										backgroundColor: isDark ? "#235347" : "#F4F7F4",
									},
								]}
							/>
						</View>

						<View style={styles.inputWrapper}>
							<Text
								style={[
									styles.inputLabel,
									{
										color: isDark ? "#D1D5DB" : "#273D2E",
									},
								]}>
								Password
							</Text>

							<View
								style={[
									styles.passwordContainer,
									{
										backgroundColor: isDark ? "#235347" : "#F4F7F4",
									},
								]}>
								<TextInput
									placeholder="Create password"
									placeholderTextColor={isDark ? "#9CA3AF" : "#7D8B84"}
									secureTextEntry={!showPassword}
									style={[
										styles.passwordInput,
										{
											color: isDark ? "#FFFFFF" : "#273D2E",
										},
									]}
								/>

								<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
									<FontAwesome6
										name={showPassword ? "eye-slash" : "eye"}
										size={18}
										color={isDark ? "#D1D5DB" : "#5C6B63"}
									/>
								</TouchableOpacity>
							</View>
						</View>

						<View style={styles.inputWrapper}>
							<Text
								style={[
									styles.inputLabel,
									{
										color: isDark ? "#D1D5DB" : "#273D2E",
									},
								]}>
								Confirm Password
							</Text>

							<View
								style={[
									styles.passwordContainer,
									{
										backgroundColor: isDark ? "#235347" : "#F4F7F4",
									},
								]}>
								<TextInput
									placeholder="Confirm password"
									placeholderTextColor={isDark ? "#9CA3AF" : "#7D8B84"}
									secureTextEntry={!showConfirmPassword}
									style={[
										styles.passwordInput,
										{
											color: isDark ? "#FFFFFF" : "#273D2E",
										},
									]}
								/>

								<TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
									<FontAwesome6
										name={showConfirmPassword ? "eye-slash" : "eye"}
										size={18}
										color={isDark ? "#D1D5DB" : "#5C6B63"}
									/>
								</TouchableOpacity>
							</View>
						</View>

						<TouchableOpacity
							style={[
								styles.loginBtn,
								{
									backgroundColor: isDark ? "#8BB69B" : "#0B2B26",
								},
							]}>
							<Text
								style={[
									styles.loginText,
									{
										color: isDark ? "#0B2B26" : "#FFFFFF",
									},
								]}>
								Create Account
							</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.dividerContainer}>
						<View style={styles.dividerLine} />
						<Text
							style={[
								styles.dividerText,
								{
									color: isDark ? "#A8B3AF" : "#5C6B63",
								},
							]}>
							OR
						</Text>
						<View style={styles.dividerLine} />
					</View>

					<View style={styles.socialLoginWrapper}>
						<TouchableOpacity style={styles.button}>
							<FontAwesome6 name="google" size={20} />
							<Text style={styles.buttonText}>Continue with Google</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.button}>
							<FontAwesome6 name="x-twitter" size={20} />
							<Text style={styles.buttonText}>Continue with X</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.signupContainer}>
						<Text
							style={{
								color: isDark ? "#A8B3AF" : "#5C6B63",
							}}>
							Already have an account?
						</Text>

						<TouchableOpacity onPress={() => router.push("/login")}>
							<Text
								style={[
									styles.signupText,
									{
										color: isDark ? "#8BB69B" : "#0B2B26",
									},
								]}>
								{" "}
								Login
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default Signup;

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
		fontSize: 30,
		fontWeight: "700",
		textAlign: "center",
	},

	subTitle: {
		fontSize: 15,
		textAlign: "center",
		marginTop: 6,
	},

	form: {
		marginTop: 35,
	},

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
		borderColor: "#D8E2DA",
	},

	passwordContainer: {
		height: 55,
		borderRadius: 14,
		borderWidth: 1,
		borderColor: "#D8E2DA",
		paddingHorizontal: 16,
		flexDirection: "row",
		alignItems: "center",
	},

	passwordInput: {
		flex: 1,
		height: "100%",
	},

	forgotPassword: {
		alignSelf: "flex-end",
		marginTop: 4,
		fontWeight: "500",
	},

	loginBtn: {
		height: 55,
		borderRadius: 14,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 24,
	},

	loginText: {
		fontSize: 17,
		fontWeight: "700",
	},

	dividerContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 28,
	},

	dividerLine: {
		flex: 1,
		height: 1,
		backgroundColor: "#D8E2DA",
	},

	dividerText: {
		marginHorizontal: 12,
		fontWeight: "600",
	},

	socialLoginWrapper: {
		gap: 12,
	},

	button: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 12,
		height: 55,
		borderRadius: 30,
		borderWidth: 1,
		borderColor: "#0B2B26",
	},

	buttonText: {
		fontSize: 15,
		fontWeight: "600",
	},

	signupContainer: {
		marginTop: 28,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},

	signupText: {
		fontWeight: "700",
	},
});
