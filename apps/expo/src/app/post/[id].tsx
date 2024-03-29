import { SafeAreaView, Text, View } from "react-native";
import { useGlobalSearchParams } from "expo-router";

export default function Post(): React.ReactElement {
  const { id } = useGlobalSearchParams();
  if (!id || typeof id !== "string") throw new Error("unreachable");

  // const { data } = api.news..useQuery({ id: parseInt(id) });

  // if (!data) return <></>;

  return (
    <SafeAreaView className="bg-background">
      {}
      {/* <Stack.Screen options={{ title: data.title }} /> */}
      <View className="h-full w-full p-4">
        <Text className="py-2 text-3xl font-bold text-primary">
          Placeholder
          {/* {data.title} */}
        </Text>
        <Text>Placeholder</Text>
        {/* <Text className="py-4 text-foreground">{data.content}</Text> */}
      </View>
    </SafeAreaView>
  );
}
