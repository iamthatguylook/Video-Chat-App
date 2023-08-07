import React from "react";
import { View, Text, TextInput } from "react-native";
import { StyleSheet, Platform, StatusBar, SafeAreaView, TouchableOpacity, Alert } from "react-native";

export default function SignUp() {
	return <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}></SafeAreaView>;
}

const SafeAreaViewAndroid = StyleSheet.create({
	AndroidSafeArea: {
		flex: 1,
		backgroundColor: "#1E1E1E",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
});
