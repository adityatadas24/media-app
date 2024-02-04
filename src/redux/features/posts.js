import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  posts: null,
  errors: null,
};

export const fetchPosts = createAsyncThunk("fetchPost", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, actions) => {
      return { ...state, loading: false, posts: actions.payload };
    });
    builder.addCase(fetchPosts.pending, (state, actions) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchPosts.rejected, (state, actions) => {
      return { ...state, loading: true, errors: actions.payload };
    });
  },
});

export default posts.reducer;
