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
        headers:{ "Authorization": `Token ${localStorage.getItem('token')}`
    } }),
    endpoints: (builder) => ({
        getNews: builder.query<NewsType[], void>({
            query: () => `post`,
        }),
        getFullNews: builder.query<FullNewsType, string>({
            query: (id) => `post/${id}`,
        }),
        getSelectNews: builder.query<NewsType[], void>({
            query: () => `like`,
        })
        ,
        getAuthorPosts: builder.query<any, string>({
            query: (author_nickname) => ({
                    url: `post/?author=${author_nickname}`,
                    method: 'GET',
                }
            ),

        }),

    }),
})
export const {useGetNewsQuery,useGetFullNewsQuery,useGetSelectNewsQuery,useGetAuthorPostsQuery}=fetchNewsApi
