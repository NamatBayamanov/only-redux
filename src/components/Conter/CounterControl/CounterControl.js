import { useDispatch } from "react-redux";
function CounterControl() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: "counter/increment" })}>+</button>
      <button onClick={() => dispatch({ type: "counter/reset" })}>reset</button>
      <button onClick={() => dispatch({ type: "counter/decrement" })}>-</button>
    </div>
  );
}

export default CounterControl;
