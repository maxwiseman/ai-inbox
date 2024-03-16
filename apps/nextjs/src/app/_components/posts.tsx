"use client";

import { use } from "react";
import { Button } from "@ai-inbox/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@ai-inbox/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  useForm,
} from "@ai-inbox/ui/form";
import { Input } from "@ai-inbox/ui/input";
import { Skeleton } from "@ai-inbox/ui/skeleton";
import { Textarea } from "@ai-inbox/ui/textarea";
import { toast } from "@ai-inbox/ui/toast";
import { CreatePostSchema } from "@ai-inbox/validators";
import { IconTrash } from "@tabler/icons-react";

import { api } from "~/trpc/react";

export function CreatePostForm(): React.ReactElement {
  const form = useForm({
    schema: CreatePostSchema,
    defaultValues: {
      content: "",
      title: "",
    },
  });

  const utils = api.useUtils();
  const createPost = api.post.create.useMutation({
    onSuccess: async () => {
      form.reset();
      await utils.post.invalidate();
    },
    onError: (err) => {
      toast.error(
        err.data?.code === "UNAUTHORIZED"
          ? "You must be logged in to post"
          : "Failed to create post",
      );
    },
  });

  function submit(data: { title: string; content: string }): void {
    toast.promise(createPost.mutateAsync(data), {
      loading: "Creating post...",
      success: "Post created!",
      error: "Failed to create post!",
    });
  }

  return (
    <Form {...form}>
      <form
        className="flex w-full max-w-2xl flex-col gap-4"
        onSubmit={form.handleSubmit(async (data) => {
          submit(data);
        })}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Title" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea {...field} placeholder="Content" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Create</Button>
      </form>
    </Form>
  );
}

export function PostList(props: {
  posts: Promise<
    {
      id: number;
      title: string;
      content: string;
      createdAt: Date;
      updatedAt: Date | null;
    }[]
  >;
}): React.ReactElement {
  // TODO: Make `useSuspenseQuery` work without having to pass a promise from RSC
  const initialData = use(props.posts);
  const { data: posts } = api.post.all.useQuery(undefined, {
    initialData,
  });

  if (posts.length === 0) {
    return (
      <div className="flex h-[22.625rem] w-full items-center justify-center pb-8">
        No posts yet!
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-4">
      {posts.map(
        (p: {
          id: number;
          title: string;
          content: string;
          createdAt: Date;
          updatedAt: Date | null;
        }) => {
          return <PostCard key={p.id} post={p} />;
        },
      )}
    </div>
  );
}

export function PostCard(props: {
  post: {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date | null;
  };
}): React.ReactElement {
  const utils = api.useUtils();
  const deletePost = api.post.delete.useMutation({
    onSuccess: async () => {
      await utils.post.invalidate();
    },
    onError: (err) => {
      toast.error(
        err.data?.code === "UNAUTHORIZED"
          ? "You must be logged in to delete a post"
          : "Failed to delete post",
      );
    },
  });

  return (
    <Card>
      <CardHeader className="p-6 pb-4">
        <CardTitle className="flex items-center justify-between">
          {props.post.title}
          <Button
            variant="secondary"
            onClick={() => {
              deletePost.mutate(props.post.id);
            }}
            size="icon"
            icon={<IconTrash />}
          />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">{props.post.content}</CardContent>
    </Card>
  );
}

export function PostCardSkeleton(): React.ReactElement {
  return <Skeleton className="h-[6.875rem] w-full rounded-xl" />;
}
