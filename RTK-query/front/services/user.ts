import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { backUrl } from "../config/config";

export const userApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: backUrl }),
  tagTypes: [],
  endpoints: (builder) => ({
    getLoadMyInfo: builder.query({
      query: () => `/user`,
    }),
  }),
});

export const { useGetLoadMyInfoQuery } = userApi;
