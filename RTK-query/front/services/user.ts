import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { backUrl } from "../config/config";
import { RootState } from "../store/configureStore";

interface LoginRequestProps {
  email: string;
  password: string;
}
interface LoginResponseProps {
  id: string;
  nickname: string;
  Posts: number;
  Followings: number;
  Followers: number;
  Ignorings: number;
}
export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: backUrl,
    credentials: "include",
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getLoadMyInfo: builder.query({
      query: () => `/user`,
    }),
    postLogin: builder.mutation<LoginResponseProps, LoginRequestProps>({
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
