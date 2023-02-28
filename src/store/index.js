import { configureStore, createSlice } from "@reduxjs/toolkit";

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
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INC":
//       state = {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };
//       break;
//     case "DEC":
//       state = {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };

//       break;
//     case "TOGGLE":
//       state = {
//         counter: state.counter,
//         showCounter: !state.showCounter,
//       };
//       break;
//     case "INCREASE":
//       state = {
//         counter: state.counter + action.payload,
//         showCounter: state.showCounter,
//       };
//       break;
//     default:
//       break;
//   }
//   return state;
// };

const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});
export const counterActions = counterSlice.actions;
export default store;
