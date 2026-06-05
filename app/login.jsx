import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, useColorScheme } from "react-native";
import { useNavigation } from "expo-router";

import InputField from "../components/InputField";
import PasswordInputField from "../components/PasswordInputField";
import PrimaryButton from "../components/PrimaryButton";
import SocialButton from "../components/SocialButton";
import Divider from "../components/Divider";
import { Colors } from "../constants/Colors";

const Login = () => {
	const theme = useColorScheme() ?? "light";
    const navigation = useNavigation();
	const colors = Colors[theme];

	return (
		<View
			style={[
				styles.container,
				{
					backgroundColor: colors.background,
				},
			]}>
			<View
				style={[
					styles.card,
					{
						backgroundColor: colors.cardSecondary,
					},
				]}>
				<Text
					style={[
						styles.title,
						{
							color: colors.text,
						},
					]}>
					Welcome Back!
				</Text>

				<Text
					style={[
						styles.subTitle,
						{
							color: colors.textSecondary,
						},
					]}>
					Login to continue
				</Text>

				<View style={styles.form}>
					<InputField 
						label="Email" 
						placeholder="Enter your email" 
						keyboardType="email-address" 
					/>

					<PasswordInputField 
						label="Password" 
						placeholder="Enter your password" 
					/>

					<TouchableOpacity onPress={() => navigation.navigate('forgotPassword')}>
						<Text
							style={[
								styles.forgotPassword,
								{
									color: colors.textSecondary,
								},
							]}>
							Forgot Password?
						</Text>
					</TouchableOpacity>

					<PrimaryButton 
						title="Login" 
						onPress={() => navigation.navigate('(tabs)')} 
					/>
				</View>

				<Divider text="OR" />

				<View style={styles.socialLoginWrapper}>
					<SocialButton title="Continue with Google" iconName="google" />
					<SocialButton title="Continue with X" iconName="x-twitter" />
				</View>

				<View style={styles.signupContainer}>
					<Text
						style={{
							color: colors.textSecondary,
						}}>
						Don't have an account?{" "}
					</Text>

					<TouchableOpacity onPress={() => navigation.navigate('signup')}>
						<Text
							style={[
								styles.signupText,
								{
									color: colors.link,
								},
							]}>
							Sign Up
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default Login;

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
	forgotPassword: {
		alignSelf: "flex-end",
		marginTop: 4,
		fontWeight: "500",
	},
	socialLoginWrapper: {
		gap: 12,
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
