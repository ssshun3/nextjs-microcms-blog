import { createClient } from "microcms-js-sdk";
export const client = createClient({
  serviceDomain: "first-blog-next-js",
  apiKey: process.env.API_KEY,
});
