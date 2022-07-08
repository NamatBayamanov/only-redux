import { useDispatch } from "react-redux"
import { useState } from "react";
import NameDisplay from "./NameDisplay/NameDisplay";

function Name() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const onChangeName = (event) => {
    setName(event.target.value);

    dispatch({ type: "name/change", payload: name });
  }
  return ( 
    <div className="Name">
      <input type="text" value={name} onChange={onChangeName} />
      <div>
        <NameDisplay/>
      </div>
    </div>
  );
}

export default Name;