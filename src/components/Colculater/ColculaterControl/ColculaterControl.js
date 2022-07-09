import { useDispatch } from "react-redux";
function ColculaterControl({ a1, b1 }) {

  const c = a1 + b1;

  const d = a1 - b1;

  const e = a1 * b1;
  
  const f = a1 / b1;

  const dispatch = useDispatch();
  return (
    <div className="ColculaterControl">
      <button onClick={() => dispatch({ type: "colculater/increment", payload: c })}>+</button>
      <button onClick={() => dispatch({ type: "colculater/decrement", payload: d})}>-</button>
      <button onClick={() => dispatch({ type: "colculater/multiple", payload: e})}>*</button>
      <button onClick={() => dispatch({ type: "colculater/devide", payload: f})}>/</button>
    </div>
  );
}

export default ColculaterControl;
