import { SafeAreaView, Text, View } from "react-native";
import { Stack, useGlobalSearchParams } from "expo-router";

import { api } from "~/utils/api";

export default function Post(): React.ReactElement {
  const { id } = useGlobalSearchParams();
  if (!id || typeof id !== "string") throw new Error("unreachable");
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- itll be ok
  const { data } = api.post.byId.useQuery({ id: parseInt(id) });

  // eslint-disable-next-line react/jsx-no-useless-fragment -- they're placeholders
  if (!data) return <></>;

  return (
    <SafeAreaView className="bg-background">
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access -- its fine */}
      <Stack.Screen options={{ title: data.title }} />
      <View className="h-full w-full p-4">
        <Text className="py-2 text-3xl font-bold text-primary">
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- its fine */}
          {data.title}
        </Text>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- its fine */}
        <Text className="py-4 text-foreground">{data.content}</Text>
      </View>
    </SafeAreaView>
  );
}
