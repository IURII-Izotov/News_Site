import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";



export const baseUrl='https://megalab.pythonanywhere.com/';

export const fetchLoginApi = createApi({
    reducerPath: 'api/login',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://megalab.pythonanywhere.com/',
        headers:{ "Authorization": "Token 4636db43fb079c6778743830cccdb72bfe1aebae"
        } }),
    tagTypes: ['Login'],
    endpoints: (builder) => ({
        postLogin: builder.mutation<any,any>({
            query: (payload:any) => (
                {
                url: 'login/',
                method: 'POST',
                body: payload,
            }),
            
        }),
    }),
})

export const {usePostLoginMutation}=fetchLoginApi
