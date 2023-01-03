import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {SetStateAction} from "react";



export const baseUrl='https://megalab.pythonanywhere.com/';

export interface PersonalDataType {
    id: number
    nickname: string
    name: string
    last_name: string
    profile_image?:string|undefined
}
export const fetchUserApi = createApi({
    reducerPath: 'api/user',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://megalab.pythonanywhere.com/',
        headers:{
        "Authorization": `Token ${localStorage.getItem('token')}`
    } }),

    endpoints: (builder) => ({
        getUser: builder.query<PersonalDataType, void>({
            query: () => ({
                    url: `user/`,
                    method: 'GET',
                }
            ),

        }),
        setDataUser: builder.mutation<any,any>({
            query: (payload:any) => {
                return {
                    url: `user/` ,
                    method: 'PUT',
                    body:payload,
                    headers:{
                        "Authorization": `Token ${localStorage.getItem('token')}`,
                    }
                }
            },
            transformResponse: (response: { data:any}, meta, arg) =>{
                console.log(response)
                return response
            },
        }),

    }),
})

export const {useGetUserQuery,useSetDataUserMutation}=fetchUserApi

