import { useState } from "react";

const TesbihCirle = (props) => {
let [counter, setCounter] = useState(0);


let onClickHandler = () => {
    setCounter(() => {return counter++})
}


  return (
    <div>
      <button onClick={onClickHandler}>click</button>
      <label>{counter}</label>
    </div>
  );
};

export default TesbihCirle;
