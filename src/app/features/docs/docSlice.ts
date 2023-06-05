import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthAxios from "@/api/axios";
import { toast } from "react-toastify";
import { Doc } from "@/utils/types";
import { DocForm } from "@/modules/Doc";

type docsPayload = {
  message: string;
  doc: Doc;
  docs: Doc[];
};

type Data = {
  id?: number;
  doc: DocForm;
};

interface docState {
  docs: Doc[];
  filteredData: Doc[]; // Filtered data
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

export const GetAllDocs = createAsyncThunk(
  "doc/GetAllDocs",
  async (_, thunkAPI) => {
    try {
      const response = await AuthAxios.get("/docs");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

export const Createdocs = createAsyncThunk(
  "doc/Createdocs",
  async (data: DocForm, thunkAPI) => {
    try {
      const response = await AuthAxios.post("/docs", JSON.stringify(data));
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

export const Updatedocs = createAsyncThunk(
  "doc/Updatedocs",
  async (data: Data, thunkAPI) => {
    try {
      const { id, doc } = data;
      const response = await AuthAxios.put(`/docs/${id}`, JSON.stringify(doc));
      return response?.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);
export const Deletedocs = createAsyncThunk(
  "doc/Deletedocs",
  async (id: string, thunkAPI) => {
    try {
      const response = await AuthAxios.delete(`/docs/${id}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

const initialState: docState = {
  docs: [],
  filteredData: [],
  status: "idle",
  error: null,
};

const DocSlice = createSlice({
  name: "Doc",
  initialState,
  reducers: {
    search: (state, action) => {
      const query = action.payload.toLowerCase();
      const filteredData = state.docs.filter(
        (row) =>
          row.nomComplete.toLowerCase().includes(query.toLowerCase()) ||
          row.journalier.toLocaleString().includes(query.toLowerCase()) ||
          row.mensuel.toLocaleString().includes(query.toLowerCase())
      );
      state.filteredData = filteredData;
    },
  },
  extraReducers(builder) {
    builder
      /** Read */
      .addCase(GetAllDocs.pending, (state) => {
        state.status = "pending";
      })
      .addCase(GetAllDocs.fulfilled, (state, action) => {
        state.status = "succeeded";
        const docs = action.payload;
        state.docs = docs as Doc[];
        state.filteredData = state.docs;
      })
      .addCase(GetAllDocs.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      })
      /** Create */
      .addCase(Createdocs.pending, (state) => {
        state.status = "pending";
      })
      .addCase(Createdocs.fulfilled, (state, action) => {
        state.status = "succeeded";
        toast.success("Doc created successfly");
        state.docs.unshift(action.payload as Doc);
        state.filteredData = state.docs;
      })
      .addCase(Createdocs.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        const { message } = action.payload;
        toast.error(message);
        state.error = action.payload;
      })
      /** Update */
      .addCase(Updatedocs.pending, (state) => {
        state.status = "pending";
      })
      .addCase(
        Updatedocs.fulfilled,
        (state, action: PayloadAction<docsPayload>) => {
          state.status = "succeeded";
          const { doc, message } = action.payload;
          const { id } = doc;
          const index = state.docs.findIndex((obj) => obj.id === id);
          state.docs[index] = doc;
          state.filteredData = state.docs;
          toast.success(message);
        }
      )
      .addCase(Updatedocs.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      })
      /** Delete */
      .addCase(Deletedocs.pending, (state) => {
        state.status = "pending";
      })
      .addCase(Deletedocs.fulfilled, (state, action) => {
        state.status = "succeeded";
        const id = action.meta.arg;
        state.docs = state.docs.filter((Doc) => Doc.id !== parseInt(id));
        toast.success("Doc deleted successfly");
        state.filteredData = state.docs;
      })
      .addCase(Deletedocs.rejected, (state, action: PayloadAction<any>) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { search } = DocSlice.actions;

export default DocSlice.reducer;
