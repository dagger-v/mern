import { apiSlice } from "./apiSlice";
const ARTICLES_URL = "/article";

export const articlesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    write: builder.mutation({
      query: (data) => ({
        url: `${ARTICLES_URL}/write`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useWriteMutation } = articlesApiSlice;
