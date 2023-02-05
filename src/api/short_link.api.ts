import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


//API LINK shrtco.de
export const shortLinkApi = createApi({
    reducerPath: 'api/shortLink',
    baseQuery: fetchBaseQuery({}),
    endpoints: (builder) => ({
        getShortLink: builder.query<any, any>({
            query: (id) => `https://api.shrtco.de/v2/shorten?url=https://news-site-rho.vercel.app/post/${id}`,
        }),
    }),
})

export const {useGetShortLinkQuery} = shortLinkApi
