import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { baseUrl } from ".";
import { AuthRegistrationPost } from "../../contract/api";

export const fetchLoginApi = createApi({
  reducerPath: "api/login",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/auth`,
    headers: {},
  }),
  tagTypes: ["Login"],
  endpoints: builder => ({
    postLogin: builder.mutation<any, any>({
      query: (payload: any) => {
        return {
          url: "login/",
          method: "POST",
          body: payload,
        };
      },
      transformResponse: (response: { data: any }, meta, arg) => {
        return response;
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
          url: `logout/`,
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        };
      },
    }),
  }),
});

export const { usePostLoginMutation, useCreateRegistrationMutation, useCreateLogOutQuery } =
  fetchLoginApi;
