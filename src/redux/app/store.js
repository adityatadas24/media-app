import { configureStore, combineReducers } from "@reduxjs/toolkit";
import openPostReducer from "../features/openPostSlice";
import postsReducer from "../features/posts";

import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  openPost: openPostReducer,
  posts: postsReducer,
  // Add other reducers here if needed
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
