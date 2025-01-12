import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TailwindProvider } from "tailwindcss-react-native";

import LoginScreen from "./screens/login";
import SignUp from "./screens/signup";
import HomeScreen from "./screens/home";
import LoadingScreen from "./screens/loadingScreen";
const StackNavigator = createStackNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<TailwindProvider>
				<StackNavigator.Navigator>
					<StackNavigator.Screen
						name="login"
						component={LoginScreen}
						options={{ presentation: "fullScreenModal", headerShown: false }}
					></StackNavigator.Screen>
					<StackNavigator.Screen
						name="signup"
						component={SignUp}
						options={{ presentation: "fullScreenModal", headerShown: false }}
					></StackNavigator.Screen>
					<StackNavigator.Screen
						name="home"
						component={HomeScreen}
						options={{ presentation: "fullScreenModal", headerShown: false }}
					></StackNavigator.Screen>
					<StackNavigator.Screen
						name="loadingScreen"
						component={LoadingScreen}
						options={{ presentation: "fullScreenModal", headerShown: false }}
					></StackNavigator.Screen>
				</StackNavigator.Navigator>
			</TailwindProvider>
		</NavigationContainer>
	);
}
