import { Tabs } from "expo-router";
import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";

export default function Layout() {
	return (
		<Tabs>
			<Tabs.Screen
				name="index"
				options={{
					title: "Taskly",
					tabBarIcon: ({ color, size }) => (
						<Feather name="list" color={color} size={size} />
					),
				}}
			/>
			<Tabs.Screen
				name="counter"
				options={{
					headerShown: false,
					title: "Counter",
					tabBarIcon: ({ color, size }) => (
						<AntDesign name="clockcircleo" color={color} size={size} />
					),
				}}
			/>
			<Tabs.Screen
				name="idea"
				options={{
					title: "Idea",
					tabBarIcon: ({ color, size }) => (
						<FontAwesome5 name="lightbulb" color={color} size={size} />
					),
				}}
			/>
		</Tabs>
	);
}
