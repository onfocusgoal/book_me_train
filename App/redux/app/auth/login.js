import { apiSlice } from "../../api/apiSlice";

export const loginAPISlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials) => ({
				url: "/login",
				method: "POST",
				body: { ...credentials },
			}),
		}),
	}),
});

export const { useLoginMutation } = loginAPISlice;
