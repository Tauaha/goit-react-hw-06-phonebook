import { createSlice } from "@reduxjs/toolkit";



const filtersSlice = createSlice({
  name: "filter",
  initialState: '',
  reducers: {
    setFilter(state, action) {
        return (state = action.payload);
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

//Selector

export const getFilterContacts = (state) => state.filter