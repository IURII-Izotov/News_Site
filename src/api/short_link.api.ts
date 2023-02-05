import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

let url= window.location.origin;
if(url.includes('localhost')){
    url = 'https://news-site-rho.vercel.app'
}
//API LINK shrtco.de
export const shortLinkApi = createApi({
    reducerPath: 'api/shortLink',
    baseQuery: fetchBaseQuery({}),
    endpoints: (builder) => ({
        getShortLink: builder.query<any, any>({
            query: (id) => `https://api.shrtco.de/v2/shorten?url=${url}/post/${id}`,
        }),
    }),
})

export const {useGetShortLinkQuery} = shortLinkApi
