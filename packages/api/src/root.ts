import { authRouter } from "./router/auth";
import { miscRouter } from "./router/misc";
import { newsRouter } from "./router/news";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  news: newsRouter,
  misc: miscRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
