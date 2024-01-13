import React from "react";
import { View, Text, TextInput } from "react-native";
import { StyleSheet, Platform, StatusBar, SafeAreaView, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useCallback } from "react";
import { Dropdown } from "react-native-element-dropdown";
export default function HomeScreen() {
	const [country, setCountry] = useState(null);
	const [gender, setGender] = useState(null);
	const [isGenderFocus, setIsGenderFocus] = useState(false);
	const [isCountryFocus, setIsCountryFocus] = useState(false);
	const navigation = useNavigation();
	const genderValues = [
		{ label: "Male", value: "Male" },
		{ label: "Female", value: "Female" },
	];
	const countyValues = [
		{ label: "Canada", value: "Canada" },
		{ label: "USA", value: "USA" },
	];
	const renderGenderLabel = () => {
		if (gender || isGenderFocus) {
			return <Text style={[styles.label, isGenderFocus && { color: "white", fontSize: 16 }]}>Gender</Text>;
		}
		return null;
	};
	const renderCountryLabel = () => {
		if (country || isCountryFocus) {
			return <Text style={[styles.label, isGenderFocus && { color: "white", fontSize: 16 }]}>Gender</Text>;
		}
		return null;
	};

	return (
		<SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
			<View className="mt-80 p-8">
				<Dropdown
					style={[styles.genderDropdown, isGenderFocus && { borderColor: "white", borderWidth: 1 }]}
					placeholderStyle={styles.placeholderStyle}
					selectedTextStyle={styles.selectedTextStyle}
					inputSearchStyle={styles.inputSearchStyle}
					iconStyle={styles.iconStyle}
					data={genderValues}
					search
					maxHeight={300}
					labelField="label"
					valueField="value"
					placeholder={!isGenderFocus ? "Select Gender" : "..."}
					searchPlaceholder="Search..."
					value={gender}
					onFocus={() => setIsGenderFocus(true)}
					onBlur={() => setIsGenderFocus(false)}
					onChange={(item) => {
						setGender(item.value);
						setIsGenderFocus(false);
					}}
				/>

				<Dropdown
					style={[styles.countryDropdown, "mt-20", isCountryFocus && { borderColor: "white", borderWidth: 1 }]}
					placeholderStyle={styles.placeholderStyle}
					selectedTextStyle={styles.selectedTextStyle}
					inputSearchStyle={styles.inputSearchStyle}
					iconStyle={styles.iconStyle}
					data={countyValues}
					search
					maxHeight={300}
					labelField="label"
					valueField="value"
					placeholder={!isCountryFocus ? "Select Country" : "..."}
					searchPlaceholder="Search..."
					value={country}
					onFocus={() => setIsCountryFocus(true)}
					onBlur={() => setIsCountryFocus(false)}
					onChange={(item) => {
						setCountry(item.value);
						setIsCountryFocus(false);
					}}
				/>
				<TouchableOpacity
					className="bg-[#FF4550] mx-20 p-[12px] mt-24 rounded-xl"
					onPress={function () {
						navigation.navigate("loadingScreen");
						global.room = country;
					}}
				>
					<Text className="text-black ml-4 text-xl font-extrabold">Find Someone</Text>
					<Text>
						{" "}
						{gender} {country}
					</Text>
				</TouchableOpacity>
			</View>
			<View className=" mt-20 p-8"></View>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		padding: 16,
	},
	genderDropdown: {
		height: 50,
		borderColor: "gray",
		borderWidth: 0.5,
		borderRadius: 8,
		paddingHorizontal: 8,
		backgroundColor: "#1E1E1E",
	},
	countryDropdown: {
		marginTop: 80,
		height: 50,
		borderColor: "gray",
		borderWidth: 0.5,
		borderRadius: 8,
		paddingHorizontal: 8,
		backgroundColor: "#1E1E1E",
	},
	icon: {
		marginRight: 5,
	},
	label: {
		position: "absolute",
		left: 22,
		top: 8,
		zIndex: 999,
		paddingHorizontal: 8,
		fontSize: 14,
		color: "white",
	},
	placeholderStyle: {
		fontSize: 16,
		color: "white",
	},
	selectedTextStyle: {
		fontSize: 16,
		color: "white",
	},
	iconStyle: {
		width: 20,
		height: 20,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 16,
	},
});
const SafeAreaViewAndroid = StyleSheet.create({
	AndroidSafeArea: {
		flex: 1,
		backgroundColor: "#1E1E1E",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
});
