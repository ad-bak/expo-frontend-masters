import {
	Alert,
	Button,
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { theme } from "./theme";

export default function App() {
	const handleDelete = () => {
		Alert.alert(
			"Are you sure you want to delete this item?",
			"This action cannot be undone.",
			[
				{
					text: "Cancel",
					style: "cancel",
				},
				{
					text: "Delete",
					onPress: () => console.log("Deleted"),
					style: "destructive",
				},
			]
		);
	};
	return (
		<View style={styles.container}>
			<View style={styles.itemContainer}>
				<Text style={{ fontSize: 18, fontWeight: "200" }}>Coffee</Text>
				<TouchableOpacity
					onPress={handleDelete}
					activeOpacity={0.8}
					style={styles.button}
				>
					<Text style={styles.buttonText}>Delete</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
	},
	itemContainer: {
		borderBottomWidth: 1,
		borderBottomColor: "#1a759f",
		padding: 8,
		paddingLeft: 16,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	itemText: {
		fontSize: 18,
		fontWeight: "200",
	},
	button: {
		backgroundColor: "#000",
		padding: 8,
		borderRadius: 6,
	},
	buttonText: {
		color: "#fff",
		fontWeight: "bold",
		textTransform: "uppercase",
		letterSpacing: 1,
	},
});
