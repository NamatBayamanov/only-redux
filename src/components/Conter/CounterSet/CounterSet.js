import { useState } from "react";
import { useDispatch } from "react-redux";
function CounterSet() {

  const dispatch = useDispatch();

  const [number, setNumber] = useState(0);

  return ( 

    <div className="CounterSet">
      <input type="number" value={number} onChange={({target}) => setNumber(target.value) } />
      <button onClick={() => dispatch({ type: "counter/set", payload: number })}>
        Set
      </button>
    </div>
  );
}

export default CounterSet;