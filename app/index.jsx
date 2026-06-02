import { StyleSheet, Text, View, Image, TouchableOpacity, useColorScheme } from "react-native";
import React from "react";
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const Index = () => {
  const theme = useColorScheme();
  const navigation = useNavigation();
	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_700Bold,
	});

	if (!fontsLoaded) {
		return <Text>Loading...</Text>;
	}

	return (
		<View style={[styles.container, {backgroundColor: theme === "dark" ? "#0B2B26" : "#8BB69B"}]}>
			<Image
				source={require("../assets/Login_illustration_2.png")}
				style={{ width: 500, height: 400, alignSelf: "center" }}
			/>
			<Text style={[styles.welcomeText, {color: theme === "dark" ? "#bbbbba" : "#273d2e"}]}>Welcome to Servio, your one-stop solution for all your service needs.</Text>

			<View style={styles.buttonWrapper}>
				<TouchableOpacity onPress={() => navigation.navigate('login')}>
					<Text style={[styles.loginBtn, {backgroundColor: theme === "dark" ? "#8BB69B" : "#0B2B26", color: theme === "dark" ? "#273d2e" : "#fffffe"}]}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={[styles.signupBtn, {color: theme === "dark" ? "#fffffe" : "#0B2B26", borderColor: theme === "dark" ? "#8BB698" : "#0B2B26"}]}>Sign Up</Text>
				</TouchableOpacity>
			</View>

			<Text style={[styles.or, {color: theme === "dark" ? "#fffffe" : "#273d2e"}]}>Or</Text>

			<View>
				<TouchableOpacity style={[styles.button]}>
					<FontAwesome6 name="google" size={20} color={theme === 'dark' ? "#8BB69B" : "#0B2B26"} />
					<Text style={[styles.buttonText, {color: theme === "dark" ? "#aaaaa1" : "#0B2B26"}]}>Continue with Google</Text>
				</TouchableOpacity>

				<TouchableOpacity style={[styles.button, styles.xButton]}>
					<FontAwesome6 name="x-twitter" size={20} color={theme === 'dark' ? "#8BB69B" : "#0B2B26"} />
					<Text style={[styles.buttonText, {color: theme === "dark" ? "#aaaaa1" : "#0B2B26"}]}>Continue with X</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	welcomeText: {
		fontSize: 18,
		textAlign: "center",
		fontFamily: "Inter_400Regular",
		marginTop: 40,
		paddingHorizontal: 12,
    fontWeight: 'semibold',
    width: '105%',
    color: '#273d2e'
	},
	buttonWrapper: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: 30,
		width: "75%",
	},
	loginBtn: {
		backgroundColor: "#0B2B26",
		color: "#fffffe",
		paddingVertical: 10,
		width: 120,
		fontSize: 18,
		textAlign: "center",
		borderRadius: 25,
	},
	signupBtn: {
		borderWidth: 1,
		color: "#0B2B26",
		paddingVertical: 10,
		width: 120,
		fontSize: 18,
		textAlign: "center",
		borderRadius: 25,
	},
	button: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		paddingVertical: 14,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "#EAEAEA",
		gap: 12,
		paddingHorizontal: 20,
		marginTop: 20,
	},
  or :{
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: -10,
    marginTop: 7
  }
});

export default Index;

