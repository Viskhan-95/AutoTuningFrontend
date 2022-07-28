import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  turns: [],
  loading: false,
  error: null
};

export const getTurn = createAsyncThunk("turn/get", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/turn");
    const data = await res.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const addTurns = createAsyncThunk(
  "turns/add",
  async ({ contact, checkInValue, title, userId }, thunkAPI) => {
    console.log("fwfe", checkInValue);
    try {
      const res = await fetch("http://localhost:4000/turn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contacts: contact,
          date: checkInValue,
          service: title,
          user: userId,
        }),
      });
      const data = await res.json();

      console.log(data);
      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      } else {
        return thunkAPI.fulfillWithValue(data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const turnSlice = createSlice({
  name: "turn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addTurns.fulfilled, (state, action) => {
      state.turns.push(action.payload);
      state.loading = false

    });
    builder.addCase(addTurns.pending, (state, action) => {
      state.loading = true
    });
    builder.addCase(addTurns.rejected, (state, action) => {
      state.error = 'Error'
    });
    builder.addCase(getTurn.fulfilled, (state, action) => {
      state.turns = action.payload;
      state.loading = false

    });
    builder.addCase(getTurn.rejected, (state, action) => {
      state.error = 'Error'
    });
    builder.addCase(getTurn.pending, (state, action) => {
      state.loading = true
    });
  },
});

export default turnSlice.reducer;
