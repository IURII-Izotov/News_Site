import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { baseUrl } from ".";
import type { PostGet, TagGetData } from "../../contract/api";

export interface ReplayType {
  id: number;
  user: User;
  text: string;
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

export const fetchPostApi = createApi({
  reducerPath: "api/post",
  baseQuery: fetchBaseQuery({
    baseUrl,
    headers: {},
  }),
  tagTypes: ["POST", "COMMENT", "LIKE"],
  endpoints: builder => ({
    getNews: builder.query<PostGet["response"], PostGet["request"]>({
      query: ({ query }) => {
        const base = "post";
        if (!query) return base;
        const params = new URLSearchParams();
        Object.entries(query).forEach(([k, v]) => v && params.set(k, v.toString()));
        const queryString = params.toString();
        if (!queryString) return base;
        return `${base}?${queryString}`;
      },
      providesTags: ["POST", "LIKE"],
    }),
    getFullNews: builder.query<FullNewsType, string>({
      query: id => `post/${id}`,
      providesTags: ["POST", "COMMENT", "LIKE"],
    }),
    getSelectNews: builder.query<NewsType[], void>({
      query: () => `like`,
      providesTags: ["LIKE"],
    }),
    getAuthorPosts: builder.query<any, void>({
      query: () => ({
        url: `post/?author=${localStorage.getItem("nickname")}`,
        method: "GET",
      }),
      providesTags: ["POST"],
    }),
    createPost: builder.mutation<any, any>({
      query: (payload: any) => ({
        url: "post/",
        method: "POST",
        body: payload,
      }),
      transformResponse: (response: { data: any }, meta, arg) => {
        return response;
      },
      invalidatesTags: ["POST"],
    }),

    setComment: builder.mutation<any, any>({
      query: (payload: any) => {
        return {
          url: `comment/`,
          method: "POST",
          body: payload,
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        };
      },
      transformResponse: (response: { data: any }, meta, arg) => {
        return response;
      },
      invalidatesTags: ["COMMENT"],
    }),
    setReplay: builder.mutation<any, any>({
      query: (payload: any) => {
        return {
          url: `comment/`,
          method: "POST",
          body: payload,
        };
      },
      transformResponse: (response: { data: any }, meta, arg) => {
        return response;
      },
      invalidatesTags: ["COMMENT"],
    }),

    deletePost: builder.mutation<any, any>({
      query: (id: any) => {
        return {
          url: `post/${id}/`,
          method: "DELETE",
        };
      },
      transformResponse: (response: { data: any }, meta, arg) => {
        return response;
      },
      invalidatesTags: ["POST"],
    }),
    postLike: builder.mutation<any, any>({
      query: (id: any) => {
        return {
          url: `like/`,
          method: "POST",
          body: {
            post: id,
          },
        };
      },
      transformResponse: (response: { data: any }, meta, arg) => {
        return response;
      },
      invalidatesTags: ["LIKE"],
    }),
    getTags: builder.query<TagGetData, void>({
      query: () => `tag/`,
      providesTags: ["POST"],
    }),
  }),
});

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
} = fetchPostApi;
