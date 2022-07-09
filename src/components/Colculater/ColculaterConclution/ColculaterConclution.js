import { useSelector} from "react-redux";

function ColculaterConclution() {

  const number = useSelector(store => store.colculater.number);
  return ( 
    <div className="ColculaterConclution">
      <div>
        <span>
          {number}
        </span>
      </div>
    </div>
  );
}

export default ColculaterConclution;