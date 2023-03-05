import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { warn } from "./components/Alert/Alert";
import Input from "./components/Input/Input";
import { useQuery } from "@apollo/client";
import Select from "./components/Select/Select";
import SubmitButton from "./components/SubmitButton/SubmitButton";
import UsersList from "./components/UsersList/UsersList";
import { cleanData, setSearchLogin } from "./store/searchSlice";
import { SEARCH_USERS } from "./graphql/queries";
import Loader from "./components/Loader/Loader";

function App() {
  const inputType = useSelector((state) => state.input.type);
  const [search, setSearchData] = useState("");
  const [showList, setShowList] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { data } = useQuery(SEARCH_USERS, {
    variables: { query: search, type: inputType },
  });
  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  const submit = async () => {
    if (search.length < 3) return warn("Minimum 3 characters required");
    if (inputType === "email") {
      if (!regEx.test(search)) return warn("invalid email");
    }

    setLoading(true);
    dispatch(setSearchLogin(data?.searchUsers));
    setTimeout(() => {
      setLoading(false);
      setShowList(true);
    }, 1000);
  };
  const clear = () => {
    dispatch(cleanData([]));
    setSearchData("");
    setShowList(false);
  };
  useEffect(() => {
    dispatch(cleanData([]));
  }, [search]);

  return (
    <div className="App">
      <h1>Github Finder </h1>
      <Select />
      <div className="searchBox">
        <Input value={search} onChange={(e) => setSearchData(e.target.value)} />
        <SubmitButton text={"search"} onClick={submit} />
      </div>
      <div className="clear">
        <SubmitButton text={"clear"} onClick={clear} />{" "}
      </div>
      <header className="App-header">
        {!showList && loading && <Loader message={"Searching . . ."} />}
        {showList && <UsersList hide={setShowList} />}
      </header>
      <ToastContainer />
    </div>
  );
}

export default App;
