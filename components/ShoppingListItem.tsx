import { Text, TouchableOpacity, View, StyleSheet, Alert } from "react-native";
import { theme } from "../theme";
import { AntDesign } from "@expo/vector-icons";

type ShoppingListItemProps = {
	item: string;
	isCompleted?: boolean;
};

export function ShopppingListItem({
	item,
	isCompleted,
}: ShoppingListItemProps) {
	const handleDelete = () => {
		Alert.alert(
			`Are you sure you want to delete ${item}?`,
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
		<View
			style={[
				styles.itemContainer,
				isCompleted ? styles.completedContainer : undefined,
			]}
		>
			<Text style={[styles.itemText, isCompleted && styles.completedText]}>
				{item}
			</Text>
			<TouchableOpacity onPress={handleDelete} activeOpacity={0.8}>
				<AntDesign
					name="closecircle"
					size={24}
					color={isCompleted ? theme.colorGrey : theme.colorRed}
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	itemContainer: {
		borderBottomWidth: 1,
		borderBottomColor: theme.colorCerulian,
		padding: 8,
		paddingLeft: 16,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	completedContainer: {
		borderBottomColor: theme.colorLightGrey,
		backgroundColor: theme.colorLightGrey,
	},
	itemText: {
		fontSize: 18,
		fontWeight: "200",
	},
	completedText: {
		color: theme.colorGrey,
		textDecorationLine: "line-through",
		textDecorationColor: theme.colorGrey,
	},
});
