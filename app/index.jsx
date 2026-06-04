import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	useColorScheme,
} from "react-native";
import {
	useFonts,
	Inter_400Regular,
	Inter_700Bold,
} from "@expo-google-fonts/inter";
import { FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";

const Index = () => {
	const theme = useColorScheme();
	const isDark = theme === "dark";

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
					backgroundColor: isDark ? "#0B2B26" : "#BBFFD4",
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
							color: isDark ? "#FFFFFF" : "#0B2B26",
						},
					]}
				>
					Find Trusted Services
				</Text>

				<Text
					style={[
						styles.subtitle,
						{
							color: isDark ? "#C8D5CF" : "#4A5D52",
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
							backgroundColor: isDark ? "#8BB69B" : "#0B2B26",
						},
					]}
				>
					<Text
						style={[
							styles.primaryButtonText,
							{
								color: isDark ? "#0B2B26" : "#FFFFFF",
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
							borderColor: isDark ? "#8BB69B" : "#0B2B26",
						},
					]}
				>
					<Text
						style={[
							styles.secondaryButtonText,
							{
								color: isDark ? "#FFFFFF" : "#0B2B26",
							},
						]}
					>
						Sign Up
					</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.dividerContainer}>
				<View
					style={[
						styles.dividerLine,
						{
							backgroundColor: isDark ? "#365A50" : "#9AB5A4",
						},
					]}
				/>

				<Text
					style={[
						styles.dividerText,
						{
							color: isDark ? "#C8D5CF" : "#4A5D52",
						},
					]}
				>
					Continue with
				</Text>

				<View
					style={[
						styles.dividerLine,
						{
							backgroundColor: isDark ? "#365A50" : "#9AB5A4",
						},
					]}
				/>
			</View>

			<View style={styles.socialContainer}>
				<TouchableOpacity
					style={[
						styles.socialButton,
						{
							borderColor: isDark ? "#365A50" : "#0B2B26",
						},
					]}
				>
					<FontAwesome6
						name="google"
						size={20}
						color={isDark ? "#8BB69B" : "#0B2B26"}
					/>

					<Text
						style={[
							styles.socialText,
							{
								color: isDark ? "#FFFFFF" : "#0B2B26",
							},
						]}
					>
						Continue with Google
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[
						styles.socialButton,
						{
							borderColor: isDark ? "#365A50" : "#0B2B26",
						},
					]}
				>
					<FontAwesome6
						name="x-twitter"
						size={20}
						color={isDark ? "#8BB69B" : "#0B2B26"}
					/>

					<Text
						style={[
							styles.socialText,
							{
								color: isDark ? "#FFFFFF" : "#0B2B26",
							},
						]}
					>
						Continue with X
					</Text>
				</TouchableOpacity>
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

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
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

	dividerContainer: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		marginTop: 36,
	},

	dividerLine: {
		flex: 1,
		height: 1,
	},

	dividerText: {
		marginHorizontal: 12,
		fontSize: 14,
		fontFamily: "Inter_400Regular",
	},

	socialContainer: {
		width: "100%",
		marginTop: 24,
		gap: 14,
	},

	socialButton: {
		height: 56,
		borderRadius: 18,
		borderWidth: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 12,
	},

	socialText: {
		fontSize: 15,
		fontFamily: "Inter_700Bold",
	},
});