import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { build } from 'vite';

const API_ENDPOINT = '/blog';
const BASE_URL = 'https://654bf4b05b38a59f28eff58b.mockapi.io/api';

export const commentApi = createApi({
	reducerPath: 'blog',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	tagTypes: ['Blog'],
	endpoints: (builder) => ({
		getBlog: builder.query({
			query: () => API_ENDPOINT,
			providesTags: ['Blog'],
		}),
		addComment: builder.mutation({
			query: (data) => ({
				url: API_ENDPOINT,
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['Blog'],
		}),

    updateCommentCount: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `${API_ENDPOINT}/${id}`,
        method: 'PUT',
        body,
      }),
			invalidatesTags: ['Blog'],
    })

	}),
});

export const { useGetBlogQuery, useAddCommentMutation, useUpdateCommentCountMutation } = commentApi;
