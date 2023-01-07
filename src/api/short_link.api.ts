import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {baseUrl} from "./user.api";


//API LINK shrtco.de
export const shortLinkApi = createApi({
    reducerPath: 'api/shortLink',
    baseQuery: fetchBaseQuery({
    }),
    endpoints: (builder) => ({
        getShortLink: builder.query<any, any>({
            query: (id) =>`https://api.shrtco.de/v2/shorten?url=${baseUrl}post/${id}`,
        }),
    }),
})

export const {useGetShortLinkQuery} = shortLinkApi
