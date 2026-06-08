import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-7xl font-sans-extrabold ">Home</Text>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 text-lg  font-sans-bold bg-primary text-white p-2"
      >
        Sign In
      </Link>
      <Link
        href="/subscriptions/spotify"
        className="mt-4 text-lg text-white font-sans-bold bg-primary p-2"
      >
        View Spotify Subscription
      </Link>
      <Link
        href={{ pathname: "/subscriptions/[id]", params: { id: "claude" } }}
        className="mt-4 text-lg bg-primary font-sans-bold text-white p-2"
      >
        View Claude Subscription
      </Link>
    </SafeAreaView>
  );
}
