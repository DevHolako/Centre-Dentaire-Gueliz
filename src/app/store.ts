import { configureStore } from "@reduxjs/toolkit";
// ...
import UserSlice from "@/app/features/users/userSlice";
import ActeSlice from "@features/actes/acteSlice";
import DocSlice from "@features/docs/docSlice";
// import AuthSlice from "@features/auth/authSlice";
// import ClientSlice from "@features/clients/clientSlice";
// import StockSlice from "@features/stock/stockSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    acte: ActeSlice,
    doc: DocSlice,
    // stock: StockSlice,
  },
  devTools: import.meta.env.VITE_ENV === "development",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
