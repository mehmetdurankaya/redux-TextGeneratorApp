import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPragraph = createAsyncThunk("paragraph/getPragraph", async ({ count, innerHtml }) => {
	const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/${count}/10${innerHtml}`);
	return res.data;
});

export const paragraphSlice = createSlice({
	name: "paragraph",
	initialState: {
		item: "",
	},
	reducers: {},
	extraReducers: {
		[getPragraph.fulfilled]: (state, action) => {
			state.item = action.payload;
		},
	},
});

export default paragraphSlice.reducer;
