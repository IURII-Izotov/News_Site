import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";



export const baseUrl='https://megalab.pythonanywhere.com/';
export interface PersonalDataType {
    id: number
    nickname: string
    name: string
    last_name: string
    profile_image?: string
}
export const fetchUserApi = createApi({
    reducerPath: 'api/user',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://megalab.pythonanywhere.com/',
        headers:{ "Authorization": `Token ${localStorage.getItem('token')}`
    } }),
    endpoints: (builder) => ({
        getUser: builder.query<PersonalDataType, void>({
            query: () => ({
                    url: `user/`,
                    method: 'GET',
                }
            ),

        }),
    }),
})
export const {useGetUserQuery}=fetchUserApi

