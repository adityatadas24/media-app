import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  body: "",
  id: "",
  title: "",
  userId: "",
  postImage: "",
};

const openPostSlice = createSlice({
  name: "openPost",
  initialState,
  reducers: {
    setOpenPost: (state, action) => {
      return action.payload;
    },
  },
});

export const { setOpenPost } = openPostSlice.actions;

export default openPostSlice.reducer;
