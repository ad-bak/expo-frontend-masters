import { StyleSheet, View, Text } from "react-native";
import { ShopppingListItem } from "../components/ShoppingListItem";
import { theme } from "../theme";
import { Link } from "expo-router";

export default function App() {
	return (
		<View style={styles.container}>
			<Link href="/counter" style={styles.link}>
				<Text>Counter</Text>
			</Link>
			<Link href="/idea" style={styles.link}>
				<Text>Idea</Text>
			</Link>
			<ShopppingListItem item="Coffee" />
			<ShopppingListItem item="Bread" isCompleted />
			<ShopppingListItem item="Milk" />
			<ShopppingListItem item="Eggs" />
			<ShopppingListItem item="Cheese" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colorWhite,
		justifyContent: "center",
	},
	link: {
		textAlign: "center",
		marginBottom: 18,
		fontSize: 24,
	},
});
