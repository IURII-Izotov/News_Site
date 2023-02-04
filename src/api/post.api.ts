import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const baseUrl = 'https://megalab.pythonanywhere.com/';

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

export const fetchPostApi = createApi({
    reducerPath: 'api/post',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://megalab.pythonanywhere.com/',
        headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    }),
    tagTypes: ['POST', 'COMMENT'],
    endpoints: (builder) => ({
        getNews: builder.query<NewsType[], any>({
            query: (arg) => {
                let url = new URL(`post/?${arg.searchText.search_text ? "search=" + arg.searchText.search_text : ''}${`${arg?.filterValue}` ? '&tag=' + arg?.filterValue : ''}`, baseUrl);
                return `post/${url.search}`
            },
            providesTags: ['POST']
        }),
        getFullNews: builder.query<FullNewsType, string>({
            query: (id) => `post/${id}`,
            providesTags: ['POST', 'COMMENT']
        }),
        getSelectNews: builder.query<NewsType[], void>({
            query: () => `like`,
            providesTags: ['POST']
        }),
        getAuthorPosts: builder.query<any, void>({
            query: () => ({
                    url: `post/?author=${localStorage.getItem('nickname')}`,
                    method: 'GET',
                }
            ),
            providesTags: ['POST']
        }),
        createPost: builder.mutation<any, any>({
            query: (payload: any) => (
                {
                    url: 'post/',
                    method: 'POST',
                    body: payload,
                }),
            transformResponse: (response: { data: any }, meta, arg) => {
                return response
            },
            invalidatesTags: ['POST'],
        }),

        setComment: builder.mutation<any, any>({
            query: (payload: any) => {
                return {
                    url: `comment/`,
                    method: 'POST',
                    body: payload,
                    headers: {
                        "Authorization": `Token ${localStorage.getItem('token')}`,
                    }
                }
            },
            transformResponse: (response: { data: any }, meta, arg) => {
                return response
            },
            invalidatesTags: ['COMMENT'],
        }),
        setReplay: builder.mutation<any, any>({
            query: (payload: any) => {
                return {
                    url: `comment/`,
                    method: 'POST',
                    body: payload,
                }
            },
            transformResponse: (response: { data: any }, meta, arg) => {
                return response
            },
            invalidatesTags: ['COMMENT'],
        }),

        deletePost: builder.mutation<any, any>({
            query: (id: any) => {
                return {
                    url: `post/${id}/`,
                    method: 'DELETE',
                }
            },
            transformResponse: (response: { data: any }, meta, arg) => {
                return response
            },
            invalidatesTags: ['POST'],
        }),
        postLike: builder.mutation<any, any>({
            query: (id: any) => {
                return {
                    url: `like/`,
                    method: 'POST',
                    body: {
                        post: id
                    }
                }
            },
            transformResponse: (response: { data: any }, meta, arg) => {
                return response
            },
            // invalidatesTags: ['POST'],
        }),
        getTags: builder.query<any, void>({
            query: () => `tag/`,
            providesTags: ['POST']
        }),
    }),
})
export const {
    useGetNewsQuery,
    useGetFullNewsQuery,
    useGetSelectNewsQuery,
    useGetAuthorPostsQuery,
    useCreatePostMutation,
    useSetCommentMutation,
    useSetReplayMutation,
    useDeletePostMutation,
    usePostLikeMutation,
    useGetTagsQuery,
} = fetchPostApi
