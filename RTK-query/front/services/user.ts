import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { backUrl } from "../config/config";

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
  baseQuery: fetchBaseQuery({ baseUrl: backUrl }),
  tagTypes: [],
  endpoints: (builder) => ({
    getLoadMyInfo: builder.query({
      query: () => `/user`,
    }),
    postLogin: builder.mutation<LoginResponseProps, LoginRequestProps>({
      query(body) {
        return {
          url: "/login",
          method: "POST",
          body,
        };
      },
      transformResponse: (response: { data: LoginResponseProps }, meta, arg) =>
        response.data,
    }),
  }),
});

export const { useGetLoadMyInfoQuery, usePostLoginMutation } = userApi;
