import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/(auth)/sign-in" className="mt-4 text-lg bg-primary text-white p-2">
        Sign In
      </Link>
      <Link href='/subscriptions/spotify' className="mt-4 text-lg bg-secondary text-white bg-primary p-2">
        View Spotify Subscription
      </Link>
      <Link href={{pathname: '/subscriptions/[id]', params: {id: 'claude'}}} className="mt-4 text-lg bg-primary text-white p-2">
        View Claude Subscription
      </Link>
    </View>
  );
}
