import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { backUrl } from "../config/config";
import User from "../interfaces/user";

export const userApi = createApi({
  reducerPath: "User",
  baseQuery: fetchBaseQuery({
    baseUrl: backUrl,
    credentials: "include",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getLoadMyInfo: builder.query({
      query: () => `/user`,
    }),
    postLogin: builder.mutation<User, Pick<User, "id" & "password">>({
      query(body) {
        return {
          url: "/user/login",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useGetLoadMyInfoQuery, usePostLoginMutation } = userApi;
