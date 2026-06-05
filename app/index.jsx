import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, useColorScheme } from "react-native";
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { router } from "expo-router";

import SocialButton from "../components/SocialButton";
import Divider from "../components/Divider";
import { Colors } from "../constants/Colors";

const Index = () => {
	const theme = useColorScheme() ?? "light";
	const colors = Colors[theme];

	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_700Bold,
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View
			style={[
				styles.container,
				{
					backgroundColor: colors.background,
				},
			]}
		>
			<Image
				source={require("../assets/Login_illustration_2.png")}
				style={styles.illustration}
				resizeMode="contain"
			/>

			<View style={styles.textContainer}>
				<Text
					style={[
						styles.title,
						{
							color: colors.text,
						},
					]}
				>
					Find Trusted Services
				</Text>

				<Text
					style={[
						styles.subtitle,
						{
							color: colors.textMuted,
						},
					]}
				>
					Book reliable professionals for repairs, cleaning,
					deliveries, and more.
				</Text>
			</View>

			<View style={styles.buttonWrapper}>
				<TouchableOpacity
					onPress={() => router.push("/login")}
					style={[
						styles.primaryButton,
						{
							backgroundColor: colors.primaryButtonBackground,
							shadowColor: colors.shadow,
						},
					]}
				>
					<Text
						style={[
							styles.primaryButtonText,
							{
								color: colors.primaryButtonText,
							},
						]}
					>
						Login
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => router.push("/signup")}
					style={[
						styles.secondaryButton,
						{
							borderColor: colors.secondaryButtonBorder,
						},
					]}
				>
					<Text
						style={[
							styles.secondaryButtonText,
							{
								color: colors.secondaryButtonText,
							},
						]}
					>
						Sign Up
					</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.dividerWrapper}>
				<Divider text="Continue with" />
			</View>

			<View style={styles.socialContainer}>
				<SocialButton title="Continue with Google" iconName="google" />
				<SocialButton title="Continue with X" iconName="x-twitter" />
			</View>
		</View>
	);
};

export default Index;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		paddingHorizontal: 24,
		justifyContent: "center",
	},
	illustration: {
		width: "100%",
		height: 280,
	},
	textContainer: {
		alignItems: "center",
		marginTop: 8,
	},
	title: {
		fontSize: 34,
		fontFamily: "Inter_700Bold",
		textAlign: "center",
	},
	subtitle: {
		fontSize: 16,
		fontFamily: "Inter_400Regular",
		textAlign: "center",
		lineHeight: 24,
		marginTop: 12,
		maxWidth: 320,
	},
	buttonWrapper: {
		flexDirection: "row",
		gap: 16,
		marginTop: 36,
	},
	primaryButton: {
		width: 140,
		height: 52,
		borderRadius: 26,
		justifyContent: "center",
		alignItems: "center",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 4,
	},
	primaryButtonText: {
		fontSize: 16,
		fontFamily: "Inter_700Bold",
	},
	secondaryButton: {
		width: 140,
		height: 52,
		borderRadius: 26,
		borderWidth: 1.5,
		justifyContent: "center",
		alignItems: "center",
	},
	secondaryButtonText: {
		fontSize: 16,
		fontFamily: "Inter_700Bold",
	},
	dividerWrapper: {
		width: "100%",
	},
	socialContainer: {
		width: "100%",
		gap: 14,
	},
});