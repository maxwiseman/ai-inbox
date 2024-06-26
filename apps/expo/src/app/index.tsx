import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";
import { FlashList } from "@shopify/flash-list";

import type { RouterOutputs } from "~/utils/api";
import { api } from "~/utils/api";

function PostCard(props: {
  feed: RouterOutputs["news"]["allFeeds"][number];
  onDelete: () => void;
}): React.ReactElement {
  return (
    <View className="flex flex-row rounded-lg bg-muted p-4">
      <View className="flex-grow">
        <Link
          asChild
          href={{
            pathname: "/post/[id]",

            params: { id: props.feed.id },
          }}
        >
          <Pressable className="">
            <Text className=" text-xl font-semibold text-primary">
              {}
              {props.feed.title}
            </Text>
            {}
            <Text className="mt-2 text-foreground">{props.feed.title}</Text>
          </Pressable>
        </Link>
      </View>
      <Pressable onPress={props.onDelete}>
        <Text className="font-bold uppercase text-primary">Delete</Text>
      </Pressable>
    </View>
  );
}

function CreatePost(): React.ReactElement {
  // const utils = api.useUtils();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // const { mutate, error } = api.post.create.useMutation({
  //   async onSuccess() {
  //     setTitle("");
  //     setContent("");
  //     await utils.post.all.invalidate();
  //   },
  // });

  return (
    <View className="mt-4 flex gap-2">
      <TextInput
        className=" items-center rounded-md border border-input bg-background px-3 text-lg leading-[1.25] text-foreground"
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
      />
      {/* {error?.data?.zodError?.fieldErrors.title ? (
        <Text className="mb-2 text-destructive">
          {error.data.zodError.fieldErrors.title}
        </Text>
      ) : null} */}
      <TextInput
        className="items-center rounded-md border border-input bg-background px-3  text-lg leading-[1.25] text-foreground"
        value={content}
        onChangeText={setContent}
        placeholder="Content"
      />
      {/* {error?.data?.zodError?.fieldErrors.content ? (
        <Text className="mb-2 text-destructive">
          {error.data.zodError.fieldErrors.content}
        </Text>
      ) : null} */}
      <Pressable
        className="flex items-center rounded bg-primary p-2"
        // onPress={() => {
        //   mutate({
        //     title,
        //     content,
        //   });
        // }}
      >
        <Text className="text-foreground">Create</Text>
      </Pressable>
      {/* {error?.data?.code === "UNAUTHORIZED" && (
        <Text className="mt-2 text-destructive">
          You need to be logged in to create a post
        </Text>
      )} */}
    </View>
  );
}

export default function Index(): React.ReactElement {
  // const utils = api.useUtils();

  const postQuery = api.news.allFeeds.useQuery();

  // const deletePostMutation = api.post.delete.useMutation({
  //   onSettled: () => utils.post.all.invalidate().then(),
  // });

  return (
    <SafeAreaView className=" bg-background">
      {/* Changes page title visible on the header */}
      <Stack.Screen options={{ title: "Home Page" }} />
      <View className="h-full w-full bg-background p-4">
        <Text className="pb-2 text-center text-5xl font-bold text-foreground">
          Turbo Template
        </Text>

        <Pressable
          // onPress={() => void utils.post.all.invalidate()}
          className="flex items-center rounded-lg bg-primary p-2"
        >
          <Text className="text-foreground"> Refresh posts</Text>
        </Pressable>

        <View className="py-2">
          <Text className="font-semibold italic text-primary">
            Press on a post
          </Text>
        </View>

        <FlashList
          data={postQuery.data}
          estimatedItemSize={20}
          // eslint-disable-next-line react/no-unstable-nested-components -- this is all boilerplate
          ItemSeparatorComponent={() => <View className="h-2" />}
          renderItem={(p) => (
            <PostCard
              feed={p.item}
              onDelete={() => {
                // deletePostMutation.mutate((p.item as { id: number }).id);
              }}
            />
          )}
        />

        <CreatePost />
      </View>
    </SafeAreaView>
  );
}
