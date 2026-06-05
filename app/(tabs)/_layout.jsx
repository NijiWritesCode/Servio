import React, { useEffect, useMemo, useRef } from "react";
import { Animated, TouchableOpacity, View, useWindowDimensions, useColorScheme } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";

function CustomTabBar({ state, descriptors, navigation, colors }) {
	const { width } = useWindowDimensions();
	const insets = useSafeAreaInsets();
	const tabWidth = width / state.routes.length;

	const translateX = useRef(new Animated.Value(state.index * tabWidth)).current;

	useEffect(() => {
		Animated.spring(translateX, {
			toValue: state.index * tabWidth,
			useNativeDriver: true,
			friction: 8,
			tension: 90,
		}).start();
	}, [state.index, tabWidth, translateX]);

	const icons = useMemo(
		() => ({
			index: "home-outline",
			booking: "calendar-outline",
			profile: "person-outline",
		}),
		[],
	);

	return (
		<View
			style={{
				flexDirection: "row",
				height: 68 + insets.bottom,
				paddingBottom: insets.bottom,
				backgroundColor: colors.cardSecondary || colors.background, // fallback
				borderTopWidth: 1,
				borderTopColor: colors.divider,
				position: "relative",
				overflow: "hidden",
			}}>
			{/* Single sliding top border */}
			<Animated.View
				style={{
					position: "absolute",
					top: 0,
					left: (tabWidth - 32) / 2,
					width: 32,
					height: 5,
					backgroundColor: colors.tint,
					borderBottomLeftRadius: 20,
					borderBottomRightRadius: 20,
					transform: [{ translateX }],
				}}
			/>

			{state.routes.map((route, index) => {
				const focused = state.index === index;
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
							? options.title
							: route.name;

				const iconName = icons[route.name] || "ellipse-outline";

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!focused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: "tabLongPress",
						target: route.key,
					});
				};

				return (
					<TouchableOpacity
						key={route.key}
						onPress={onPress}
						onLongPress={onLongPress}
						accessibilityRole="button"
						accessibilityState={focused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						style={{
							flex: 1,
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Ionicons
							name={iconName}
							size={24}
							color={focused ? colors.tabIconSelected : colors.tabIconDefault}
							style={
								focused
									? {
											textShadowColor: "rgba(139, 182, 155, 0.65)",
											textShadowOffset: { width: 0, height: 0 },
											textShadowRadius: 10,
										}
									: null
							}
						/>
					</TouchableOpacity>
				);
			})}
		</View>
	);
}

export default function TabsLayout() {
	const theme = useColorScheme() ?? "light";
	const colors = Colors[theme];

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
			}}
			tabBar={(props) => <CustomTabBar {...props} colors={colors} />}>
			<Tabs.Screen name="index" options={{ title: "Home" }} />
			<Tabs.Screen name="booking" options={{ title: "Booking" }} />
			<Tabs.Screen name="profile" options={{ title: "Profile" }} />
		</Tabs>
	);
}
