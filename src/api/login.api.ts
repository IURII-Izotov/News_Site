import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


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
                return response
            },
            invalidatesTags: ['Login'],
        }),
        createRegistration: builder.mutation<any,any>({
            query: (payload:any) => {
                return       {
                    url: 'registration/',
                    method: 'POST',
                    body: payload,
                }
            }
            ,
            transformResponse: (response: { data:any}, meta, arg) =>{
                return response
            },
        }),
        createLogOut: builder.query<any,any>({
            query: (arg) =>{
               return  {
                   url:`logout/`,
                   headers:{ "Authorization": `Token ${localStorage.getItem('token')}`
                   }
               }

            }
        }),
    }),
})

export const {usePostLoginMutation,useCreateRegistrationMutation,useCreateLogOutQuery}=fetchLoginApi
