import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { backUrl } from "../config/config";
import Post from "../interfaces/post";

export const postApi = createApi({
  reducerPath: "Post",
  baseQuery: fetchBaseQuery({
    baseUrl: backUrl,
    credentials: "include",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getLoadPosts: builder.query<Post[], number | void>({
      query: (lastId = 0) => `/posts?lastId=${lastId}`,
    }),
  }),
});

export const { useGetLoadPostsQuery } = postApi;
