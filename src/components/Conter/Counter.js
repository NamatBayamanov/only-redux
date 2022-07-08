import CounterControl from "./CounterControl/CounterControl";
import CounterDisplay from "./CounterDisplay/CounterDisplay";
import CounterSet from "./CounterSet/CounterSet";

function Counter() {
  return ( 
    <div className="Counter">
      <CounterDisplay/>
      <CounterControl/>
      <CounterSet/>
    </div>
  );
}

export default Counter;