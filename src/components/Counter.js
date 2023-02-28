import { counterActions } from "../store";
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounterHandler());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const increaseBy4 = () => {
    dispatch(counterActions.increaseBy4(4));
  };
  console.log(state);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {state["showCounter"] && (
        <div className={classes.value}>{state["counter"]}</div>
      )}

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increaseBy4}>Increase by 4</button>
    </main>
  );
};

export default Counter;
