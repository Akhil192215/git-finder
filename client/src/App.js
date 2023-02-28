import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { warn } from "./components/Alert/Alert";
import Input from "./components/Input/Input";
import Select from "./components/Select/Select";
import SubmitButton from "./components/SubmitButton/SubmitButton";
import UsersList from "./components/UsersList/UsersList";
import { searchUser } from "./http";
import { cleanData, setSearchLogin } from "./store/searchSlice";

function App() {
  const inputType = useSelector((state) => state.input.type);
  const user = useSelector((state) => state.user);
  console.log(user);
  const [search, setSearch] = useState("");
  const [showList, setShowList] = useState(false);
  const dispatch = useDispatch();

  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  const submit = async () => {
    if (search.length < 3) return warn("Minimum 3 characters required");
    if (inputType === "email") {
      if (!regEx.test(search)) return warn("invalid email");
    }
    try {
      const data = await searchUser({ search, inputType });
      dispatch(setSearchLogin(data.data));
      setShowList(true);
    } catch (error) {
      if (error.response.status) {
        warn("User is not found");
      }
    }
  };
  const clear = () => {
    dispatch(cleanData([]));
    setSearch("");
  };
  useEffect(() => {
    dispatch(cleanData([]));
  }, [search]);
  return (
    <div className="App">
      <h1>Github Finder </h1>
      <Select />
      <div className="searchBox">
        <Input value={search} onChange={(e) => setSearch(e.target.value)} />
        <SubmitButton text={"search"} onClick={submit} />
      </div>
      <div className="clear">
        <SubmitButton text={"clear"} onClick={clear} />{" "}
      </div>
      <header className="App-header">
        {showList && <UsersList hide={setShowList} />}
      </header>
      <ToastContainer />
    </div>
  );
}

export default App;
