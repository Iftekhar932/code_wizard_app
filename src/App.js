import { useContext } from "react";
import "./App.css";
import { AuthContext } from "./Contexts/UserContext/UserContext";

function App() {
  const { googleSignIn } = useContext(AuthContext);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
