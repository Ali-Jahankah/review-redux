import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    toggleCounterHandler(state) {
      state.showCounter = !state.showCounter;
    },
    decrement(state) {
      state.counter--;
    },
    increment(state) {
      state.counter++;
    },
    increaseBy4(state, action) {
      state.counter += action.payload;
    },
  },
});
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
