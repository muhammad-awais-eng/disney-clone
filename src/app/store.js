import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import moviReducer from "../features/movie/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: moviReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
    }),
});
