import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { baseUrl } from ".";
import { AuthLoginPost, AuthRegistrationPost } from "../../contract/api";

export const fetchLoginApi = createApi({
  reducerPath: "api/login",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/auth`,
    credentials: "include",
  }),
  tagTypes: ["Login"],
  endpoints: builder => ({
    postLogin: builder.mutation<AuthLoginPost["response"], AuthLoginPost["request"]>({
      query: ({ body }) => {
        return {
          url: "login",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Login"],
    }),
    createRegistration: builder.mutation<
      AuthRegistrationPost["response"],
      AuthRegistrationPost["request"]
    >({
      query: ({ body }) => {
        return {
          url: "registration",
          method: "POST",
          body,
        };
      },
    }),
    createLogOut: builder.query<any, any>({
      query: arg => {
        return {
          url: `logout`,
        };
      },
    }),
  }),
});

export const { usePostLoginMutation, useCreateRegistrationMutation, useCreateLogOutQuery } =
  fetchLoginApi;
