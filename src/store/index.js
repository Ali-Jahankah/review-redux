import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INC":
      state.counter += 1;
      break;
    case "DEC":
      state.counter -= 1;
      break;
    default:
      break;
  }
  return state;
};

const store = createStore(counterReducer);
export default store;
