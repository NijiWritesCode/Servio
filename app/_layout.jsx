import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const _layout = () => {
	const theme = useColorScheme();
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<StatusBar style={theme === "dark" ? "light" : "dark"}/>
			<Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index"/>
                <Stack.Screen name="login"/>
                <Stack.Screen name="signup"/>
                <Stack.Screen name="forgotPassword"/>
                <Stack.Screen name="(tabs)"/>
            </Stack>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export default _layout;

const styles = StyleSheet.create({});
