import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const _layout = () => {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<StatusBar style="auto" />
			<Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index"/>
            </Stack>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export default _layout;

const styles = StyleSheet.create({});
