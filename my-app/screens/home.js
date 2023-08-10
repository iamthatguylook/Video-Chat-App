import React from "react";
import { View, Text, TextInput } from "react-native";
import { StyleSheet, Platform, StatusBar, SafeAreaView, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useCallback } from "react";
import DropDownPicker from "react-native-dropdown-picker";

export default function HomeScreen() {
  const [country, setCountry] = useState(null);
  const [gender, setGender] = useState(null);

  const [countryOpen, setCountryOpen] = useState(false);
  const [genderOpen, setGenderOpen] = useState(false);

  const onCountryOpen = useCallback(() => {
    setGenderOpen(false);
  }, []);

  const onGenderOpen = useCallback(() => {
    setCountryOpen(false);
  }, []);

  const [countries, setCountries] = useState([
    { label: "USA", value: "USA" },
    { label: "Canada", value: "Canada" },
  ]);

  const [genders, setGenders] = useState([
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ]);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
      <View className=" mt-10">
        <DropDownPicker open={countryOpen} onOpen={onCountryOpen} value={country} items={countries} setOpen={setCountryOpen} setValue={setCountry} setItems={setCountries} />
      </View>
      <View className=" mt-10">
        <DropDownPicker open={genderOpen} onOpen={onGenderOpen} value={gender} items={genders} setOpen={setGenderOpen} setValue={setGender} setItems={setGenders} />
      </View>
    </SafeAreaView>
  );
}

const SafeAreaViewAndroid = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
