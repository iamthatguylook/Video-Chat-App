import { Camera, CameraType } from "expo-camera";
import { useState, Component } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function App() {
	const [type, setType] = useState(CameraType.back);
	const [permission, requestPermission] = Camera.useCameraPermissions();
	const [isLoading, setIsLoading] = useState(true);
	if (!permission) {
		// Camera permissions are still loading
		return <View />;
	}

	if (!permission.granted) {
		// Camera permissions are not granted yet
		return (
			<View style={styles.container}>
				<Text style={{ textAlign: "center" }}>We need your permission to show the camera</Text>
				<Button onPress={requestPermission} title="grant permission" />
			</View>
		);
	}

	function toggleCameraType() {
		setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
	}

	return (
		<View style={styles.container}>
			<Camera style={isLoading ? styles.cameraOpacity : styles.camera} type={type}>
				<TouchableOpacity style={styles.cameraFlipButtonContainer}>
					<Icon name="camera-flip" color="black" size={40} style={styles.cameraFlipButton} onPress={toggleCameraType}></Icon>
				</TouchableOpacity>
				<Icon
					name="camera-flip"
					color="black"
					size={40}
					style={styles.cameraFlipButton}
					onPress={() => {
						setIsLoading(!isLoading);
					}}
				></Icon>
			</Camera>

			{isLoading ? (
				<View style={styles.loading}>
					<ActivityIndicator className="p-0" size="large" color="#000000" />
					<Text className="mt-2">Loading...</Text>
				</View>
			) : (
				<></>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
	spinnerTextStyle: {
		color: "#FFF",
	},
	cameraOpacity: {
		flex: 1,
		backgroundColor: "transparent",
		opacity: 0.6,
	},

	camera: { flex: 1, backgroundColor: "transparent" },

	cameraFlipButtonContainer: {
		position: "absolute",
		flexDirection: "row",
		backgroundColor: "transparent",
		marginLeft: 320,
		padding: 10,
		marginTop: 20,
		marginRight: 20,
		borderRadius: 10,
	},
	cameraFlipButton: {
		padding: 5,
		borderRadius: 15,
		backgroundColor: "#FAF9F6",
	},
	text: {
		fontSize: 24,
		fontWeight: "bold",
		color: "white",
	},
	loading: {
		position: "absolute",
		flex: 1,
		justifyContent: "center",
		flexDirection: "row",
		justifyContent: "space-around",
		marginLeft: "30%",
	},
});
