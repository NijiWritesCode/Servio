import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, useColorScheme, ScrollView } from "react-native";
import { router } from "expo-router";

import InputField from "../components/InputField";
import PasswordInputField from "../components/PasswordInputField";
import PrimaryButton from "../components/PrimaryButton";
import SocialButton from "../components/SocialButton";
import Divider from "../components/Divider";
import { Colors } from "../constants/Colors";

const Signup = () => {
	const theme = useColorScheme() ?? "light";
	const colors = Colors[theme];

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={[
				styles.scrollContainer,
				{
					backgroundColor: colors.background,
				},
			]}>
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
						Create Account
					</Text>

					<Text
						style={[
							styles.subTitle,
							{
								color: colors.textSecondary,
							},
						]}>
						Sign up to get started
					</Text>

					<View style={styles.form}>
						<InputField 
							label="Full Name" 
							placeholder="Enter your full name" 
						/>

						<InputField 
							label="Email" 
							placeholder="Enter your email" 
							keyboardType="email-address" 
						/>

						<PasswordInputField 
							label="Password" 
							placeholder="Create password" 
						/>

						<PasswordInputField 
							label="Confirm Password" 
							placeholder="Confirm password" 
						/>

						<PrimaryButton title="Create Account" />
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
							Already have an account?
						</Text>

						<TouchableOpacity onPress={() => router.push("/login")}>
							<Text
								style={[
									styles.signupText,
									{
										color: colors.link,
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
	scrollContainer: {
		flexGrow: 1,
	},
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
