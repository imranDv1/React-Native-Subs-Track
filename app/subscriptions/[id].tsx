import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SubscriptionDetails = () => {
    
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>SubscriptionId: {id}</Text>
      <Link href="/">Go back to subscriptions</Link>
    </View>
  );
};

export default SubscriptionDetails;
