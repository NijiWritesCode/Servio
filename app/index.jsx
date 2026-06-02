import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { FontAwesome6 } from "@expo/vector-icons";

const Index = () => {
	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_700Bold,
	});

	if (!fontsLoaded) {
		return <Text>Loading...</Text>;
	}

	return (
		<View style={styles.container}>
			<Image
				source={require("../assets/Login_illustration.jpg")}
				style={{ width: 500, height: 400, alignSelf: "center" }}
			/>
			<Text style={styles.welcomeText}>Welcome to Servio, your one-stop solution for all your service needs.</Text>

			<View style={styles.buttonWrapper}>
				<TouchableOpacity>
					<Text style={styles.loginBtn}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={styles.signupBtn}>Sign Up</Text>
				</TouchableOpacity>
			</View>

			<Text style={styles.or}>Or</Text>

			<View>
				<TouchableOpacity style={[styles.button, styles.googleButton]}>
					<FontAwesome6 name="google" size={20} color="#0B2B26" />
					<Text style={styles.buttonText}>Continue with Google</Text>
				</TouchableOpacity>

				<TouchableOpacity style={[styles.button, styles.xButton]}>
					<FontAwesome6 name="x-twitter" size={20} color="#000000" />
					<Text style={styles.buttonText}>Continue with X</Text>
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
		backgroundColor: "#fffffe",
	},
	welcomeText: {
		fontSize: 18,
		textAlign: "center",
		fontFamily: "Inter_400Regular",
		marginTop: 40,
		paddingHorizontal: 20,
    fontWeight: 'bold',
    width: '105%'
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
		borderBlockColor: "#0B2B26",
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
	googleButton: {
		backgroundColor: "#FFF",
	},
  or :{
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: -10,
    marginTop: 7
  }
});
