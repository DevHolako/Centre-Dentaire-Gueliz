import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { users, usersState } from "@helpers/types";
import AuthAxios from "@/api/axios";
import { toast } from "react-toastify";
import { User } from "@/utils/types";

type UserPayload = {
  message: string;
  user?: User;
  users?: User[];
};

interface UserState {
  users: User[];
  filteredData: User[]; // Filtered data
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

export const GetAllUsers = createAsyncThunk(
  "user/GetAllUsers",
  async (_, thunkAPI) => {
    try {
      const response = await AuthAxios.get("/users");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

export const CreateUser = createAsyncThunk(
  "user/CreateUser",
  async (user: User, thunkAPI) => {
    try {
      const response = await AuthAxios.post("users", JSON.stringify(user));
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

type Data = {
  id: number;
  user: User;
};
export const UpdateUser = createAsyncThunk(
  "user/UpdateUser",
  async (Data: Data, thunkAPI) => {
    try {
      const { user, id } = Data;
      const response = await AuthAxios.put(
        `/users/${id}`,
        JSON.stringify(user)
      );
      return response?.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);
export const DeleteUser = createAsyncThunk(
  "user/DeleteUser",
  async (id: string, thunkAPI) => {
    try {
      const response = await AuthAxios.delete(`/users/${id}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

const initialState: UserState = {
  users: [],
  filteredData: [],
  status: "idle",
  error: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    search: (state, action) => {
      const query = action.payload.toLowerCase();
      const filteredData = state.users.filter(
        (row) =>
          row.login.toLowerCase().includes(query.toLowerCase()) ||
          row.nomComplete.toLowerCase().includes(query.toLowerCase())
      );
      state.filteredData = filteredData;
    },
  },
  extraReducers(builder) {
    builder
      /** Read */
      .addCase(GetAllUsers.pending, (state) => {
        state.status = "pending";
      })
      .addCase(GetAllUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        const users = action.payload;
        state.users = users as User[];
        state.filteredData = state.users;
      })
      .addCase(GetAllUsers.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      })
      /** Create */
      .addCase(CreateUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        CreateUser.fulfilled,
        (state, action: PayloadAction<UserPayload>) => {
          state.status = "succeeded";
          const { user, message } = action.payload;
          toast.success(message);
          state.users.unshift(user as User);
          state.filteredData = state.users;
        }
      )
      .addCase(CreateUser.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        const { message } = action.payload;
        toast.error(message);
        state.error = action.payload;
      })
      /** Update */
      .addCase(UpdateUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        UpdateUser.fulfilled,
        (state, action: PayloadAction<UserPayload>) => {
          state.status = "succeeded";
          const { user, message } = action.payload;
          const { id } = user as User;
          const index = state.users.findIndex((obj) => obj.id === id);
          console.log(index);
          state.users[index] = user as User;
          console.log(state.users[index]);
          console.log(user);
          toast.success(message);
          state.filteredData = state.users;
        }
      )
      .addCase(UpdateUser.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      })
      /** Delete */
      .addCase(DeleteUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(DeleteUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        const id = action.meta.arg;
        state.users = state.users.filter((user) => user.id !== parseInt(id));
        toast.success("user deleted successfly");
        state.filteredData = state.users;
      })
      .addCase(DeleteUser.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { search } = UserSlice.actions;

export default UserSlice.reducer;
