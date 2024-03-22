import { authRouter } from "./router/auth";
import { miscRouter } from "./router/misc";
import { postRouter } from "./router/post";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  post: postRouter,
  misc: miscRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
