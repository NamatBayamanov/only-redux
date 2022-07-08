import { useSelector } from "react-redux";
function NameDisplay() {
  const name = useSelector((store) => {
    return store.name.name;
  });
  return ( 
    <div className="NameDisplay">
      <h2>
        {name}
      </h2>
    </div>
  );
}

export default NameDisplay;