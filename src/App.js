import { useContext } from "react";
import "./App.css";
import { AuthContext } from "./Contexts/UserContext/UserContext";

function App() {
  const { googleSignIn } = useContext(AuthContext);

  const handle = () => {
    googleSignIn()
      .then((res) => console.log(res))
      .catch((err) => console.error(err.code, err.message));
  };

  return (
    <>
      <button onClick={handle}>Sign in</button>
    </>
  );
}

export default App;
