import React from "react";
import { View, Text, TextInput } from "react-native";
import { StyleSheet, Platform, StatusBar, SafeAreaView, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={SafeAreaViewAndroid.AndroidSafeArea}>
      <View className="flex">
        <Text className="text-[48px] font-bold mt-60 mx-4 text-slate-50"> Login</Text>
        <TextInput
          className=" block w-[338px]  mt-16 mx-8 px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder:bold placeholder-black
      focus:outline-none focus:border-sky-500"
          placeholder="Email"
        />
        <TextInput className=" block w-[338px]  mt-16 mx-8 px-3 py-3 bg-white border border-slate-300 rounded-md text-m shadow-sm placeholder:bold " placeholder="Password" />
        <TouchableOpacity className="bg-[#FF2625] mx-20 p-[12px] mt-20 rounded-xl" onPress={() => Alert.alert("Simple Button pressed")}>
          <Text className="text-black ml-20 text-2xl font-extrabold">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("signup")}>
          <Text className="text-[#03D7F4] ml-16 mt-4 font-extrabold">Don't have an account? Create an account</Text>
        </TouchableOpacity>
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
