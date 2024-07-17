import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className = "flex-1 items-center justify-center bg-white"
    >
      <Text className="text-3xl">My App !</Text>
      <Link href="/profile" style = {{color : "blue"}}>Profile</Link>
    </View>
  );
}
