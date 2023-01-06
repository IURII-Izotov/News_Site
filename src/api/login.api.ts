import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {log} from "util";
import compile = WebAssembly.compile;

export const fetchLoginApi = createApi({
    reducerPath: 'api/login',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://megalab.pythonanywhere.com/',
        headers:{} }),
    tagTypes: ['Login'],
    endpoints: (builder) => ({
        postLogin: builder.mutation<any,any>({
            query: (payload:any) => {
                return       {
                    url: 'login/',
                    method: 'POST',
                    body: payload,
                }
            }

          ,
            transformResponse: (response: { data:any}, meta, arg) =>{
                console.log(response)
                return response
            },
            invalidatesTags: ['Login'],
        }),
    }),
})

export const {usePostLoginMutation}=fetchLoginApi
