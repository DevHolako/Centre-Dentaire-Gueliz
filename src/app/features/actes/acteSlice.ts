import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { Actes, ActesState } from "@helpers/types";
import AuthAxios from "@/api/axios";
import { toast } from "react-toastify";
import { Acte } from "@/utils/types";
import { ActeFrom } from "@/modules/Acte";

type ActePayload = {
  message: string;
  acte?: Acte;
  actes?: Acte[];
};

interface ActeState {
  Actes: Acte[];
  filteredData: Acte[]; // Filtered data
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

export const GetAllActes = createAsyncThunk(
  "acte/GetAllActes",
  async (_, thunkAPI) => {
    try {
      const response = await AuthAxios.get("/actes");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

export const CreateActe = createAsyncThunk(
  "acte/CreateActe",
  async (data: Acte, thunkAPI) => {
    try {
      const response = await AuthAxios.post("/actes", JSON.stringify(data), {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

type Data = {
  id?: number;
  acte: ActeFrom;
};
export const UpdateActe = createAsyncThunk(
  "acte/UpdateActe",
  async (data: Data, thunkAPI) => {
    try {
      const { acte, id } = data;
      console.log(id);
      console.log(acte);
      const response = await AuthAxios.put(
        `/actes/${id}`,
        JSON.stringify(acte)
      );
      return response?.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);
export const DeleteActe = createAsyncThunk(
  "acte/DeleteActe",
  async (id: string, thunkAPI) => {
    try {
      const response = await AuthAxios.delete(`/actes/${id}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

const initialState: ActeState = {
  Actes: [],
  filteredData: [],
  status: "idle",
  error: null,
};

const ActeSlice = createSlice({
  name: "Acte",
  initialState,
  reducers: {
    search: (state, action) => {
      const query = action.payload.toLowerCase();
      const filteredData = state.Actes.filter(
        (row) =>
          row.nom.toLowerCase().includes(query.toLowerCase()) ||
          row.prenom.toLowerCase().includes(query.toLowerCase()) ||
          row.method.toLowerCase().includes(query.toLowerCase()) ||
          row.acte.toLowerCase().includes(query.toLowerCase())
      );
      state.filteredData = filteredData;
    },
  },
  extraReducers(builder) {
    builder
      /** Read */
      .addCase(GetAllActes.pending, (state) => {
        state.status = "pending";
      })
      .addCase(GetAllActes.fulfilled, (state, action) => {
        state.status = "succeeded";
        const Actes = action.payload;
        state.Actes = Actes as Acte[];
        state.filteredData = state.Actes;
      })
      .addCase(GetAllActes.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      })
      /** Create */
      .addCase(CreateActe.pending, (state) => {
        state.status = "pending";
      })
      .addCase(CreateActe.fulfilled, (state, action) => {
        state.status = "succeeded";
        toast.success("Acte created successfly");
        state.Actes.unshift(action.payload as Acte);
        state.filteredData = state.Actes;
      })
      .addCase(CreateActe.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        const { message } = action.payload;
        toast.error(message);
        state.error = action.payload;
      })
      /** Update */
      .addCase(UpdateActe.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        UpdateActe.fulfilled,
        (state, action: PayloadAction<ActePayload>) => {
          state.status = "succeeded";
          const { acte, message } = action.payload;
          const { id } = acte as Acte;
          const index = state.Actes.findIndex((obj) => obj.id === id);
          console.log(index);
          state.Actes[index] = acte as Acte;
          toast.success(message);
          state.filteredData = state.Actes;
        }
      )
      .addCase(UpdateActe.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      })
      /** Delete */
      .addCase(DeleteActe.pending, (state) => {
        state.status = "pending";
      })
      .addCase(DeleteActe.fulfilled, (state, action) => {
        state.status = "succeeded";
        const id = action.meta.arg;
        state.Actes = state.Actes.filter((Acte) => Acte.id !== parseInt(id));
        toast.success("Acte deleted successfly");
        state.filteredData = state.Actes;
      })
      .addCase(DeleteActe.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { search } = ActeSlice.actions;

export default ActeSlice.reducer;
