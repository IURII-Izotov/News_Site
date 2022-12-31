import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";



export const baseUrl='https://megalab.pythonanywhere.com/';

export const fetchUserApi = createApi({
    reducerPath: 'api/user',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://megalab.pythonanywhere.com/',
        headers:{ "Authorization": `Token ${localStorage.getItem('token')}`
    } }),
    endpoints: (builder) => ({
        getUser: builder.query<any, void>({
            query: () => ({
                    url: `user/`,
                    method: 'GET',
                }
            ),

        }),
    }),
})
export const {useGetUserQuery}=fetchUserApi

