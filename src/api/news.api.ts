import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const baseUrl='https://megalab.pythonanywhere.com/';
export interface ReplayType {
    id: number;
    user: User;
    text: string;
}

export interface NewsType {
    id: number;
    tag: string;
    title: string;
    text: string;
    image?: any;
    is_liked: boolean;
    comment: any[];
    short_desc?: any;
    author: string;
}
export interface User {
    id: number;
    nickname: string;
    name: string;
    last_name: string;
    profile_image?: any;
}

export interface CommentType {
    id: number;
    user: User;
    text: string;
    child: any[];
}

export interface FullNewsType {
    id: number;
    tag: string;
    title: string;
    text: string;
    image?: any;
    is_liked: boolean;
    comment?: CommentType[];
    short_desc?: any;
    author: string;
}

export const fetchNewsApi = createApi({
    reducerPath: 'api/post',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://megalab.pythonanywhere.com/',
        headers:{ "Authorization": "Token 4636db43fb079c6778743830cccdb72bfe1aebae"
    } }),
    endpoints: (builder) => ({
        getNews: builder.query<NewsType[], string>({
            query: (a:string) => `post`,
        }),
        getFullNews: builder.query<FullNewsType, string>({
            query: (id) => `post/${id}`,
        })
    }),
})
export const {useGetNewsQuery,useGetFullNewsQuery}=fetchNewsApi
