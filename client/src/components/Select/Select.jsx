import { useDispatch } from "react-redux";
import { setInputType } from "../../store/inputSlice";

function Select() {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(setInputType(event.target.value));
  };

  return (
    <div>
      <label htmlFor="input-type">search by &nbsp;</label>
      <select style={{width:"120px"}}  id="input-type" onChange={handleInputChange}>
        <option value="login">Login</option>
        <option value="userName">name</option>
        <option value="email">Email</option>
      </select>
    </div>
  );
}

export default Select;
