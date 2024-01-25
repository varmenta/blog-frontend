import { createApi } from '@reduxjs/toolkit/query/react'
import { REDUCER_PATHS } from '../constants/reducerPaths'
import { METHOD_TYPES } from '../constants/methodsHttp'
import { axiosBaseQuery } from '../config/axios.config'
import { POSTS_URLS } from '../constants/url/post.urls'
import { ICreatePost, IGetPosts } from '../../interface/posts'
import { GET_POSTS } from '../constants/tags'

export const postsApi = createApi({
  reducerPath: REDUCER_PATHS.POST,
  baseQuery: axiosBaseQuery(),
  tagTypes: [GET_POSTS],
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getPosts: builder.query<Array<IGetPosts>, string>({
      query: (search?: string) => ({
        url: `${POSTS_URLS.POSTS}?search=${search}`,
        method: METHOD_TYPES.GET,
      }),
      providesTags: [GET_POSTS],
    }),
    createPost: builder.mutation<IGetPosts, ICreatePost>({
      query: (data: ICreatePost) => ({
        url: POSTS_URLS.POSTS,
        method: METHOD_TYPES.POST,
        data,
      }),
      invalidatesTags: [GET_POSTS],
    }),
    getPost: builder.query<IGetPosts, number>({
      query: (id: number) => ({
        url: `${POSTS_URLS.POSTS}/${id}`,
        method: METHOD_TYPES.GET,
      }),
    }),
  }),
})

export const {
  useLazyGetPostsQuery,
  useCreatePostMutation,
  useLazyGetPostQuery,
} = postsApi
