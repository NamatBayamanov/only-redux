import { useState } from "react";
import ColculaterConclution from "./ColculaterConclution/ColculaterConclution";
import ColculaterControl from "./ColculaterControl/ColculaterControl";
import ColculaterDisplay from "./ColculaterDisplay/ColculaterDisplay";

function Colculater() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const onChangeA = (event) => {
    setA(+event.target.value);
  };

  const onChangeB = (event) => {
    setB(+event.target.value);
  };

  return (
    <div className="Colculater">
      <ColculaterDisplay a1={a} b1={b} a2={onChangeA} b2={onChangeB} />
      <ColculaterConclution />
      <ColculaterControl a1={a} b1={b} />
    </div>
  );
}

export default Colculater;
