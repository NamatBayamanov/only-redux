

function ColculaterDisplay({ a1, b1, a2, b2 }) {


  
  

  

  return (
    <div className="ColculaterDisplay">
      <div>
        <label>
          <input type="number" value={a1} onChange={a2} />
        </label>
        <label>
          <input type="number" value={b1} onChange={b2} />
        </label>
      </div>
    </div>
  );
}

export default ColculaterDisplay;
