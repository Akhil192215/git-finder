import { useState } from "react";
import { useDispatch } from "react-redux";
import { setInputType } from "../../store/inputSlice";

function Select() {
  const dispatch = useDispatch();
const [type,setType] = useState('')
console.log(type,"................................................");
  const handleInputChange = (event) => {
    setType(event.target.value)
    if(type === undefined){
      dispatch(setInputType('login'));
    }else{
      dispatch(setInputType(event.target.value));
    }
  };

  return (
    <div>
      <label htmlFor="input-type">search by &nbsp;</label>
      <select value={type} style={{width:"120px"}}  id="input-type" onChange={handleInputChange}>
        <option value="login">Login</option>
        <option value="userName">name</option>
        <option value="email">Email</option>
      </select>
    </div>
  );
}

export default Select;
