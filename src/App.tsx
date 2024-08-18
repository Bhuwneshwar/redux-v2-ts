import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useGlobalContext } from "./MyRedux";

useGlobalContext;
function App() {
  const { dispatch, multiDispatch, store } = useGlobalContext();

  const [count, setCount] = useState(0);

  const myfun = () => {
    dispatch("married", false);
    multiDispatch([["age", 78]]);
    // multiDispatch([
    //   ["name", "Bhuwneshwar"],
    //   ["hobbies", ["coding", "cleaning", "traveling"]],
    //   ["last", "Mandal"],
    //   ["age", 24],
    //   ["married", false],
    //   [
    //     "family",
    //     {
    //       FatherFullName: "phanibhushan",
    //       mother: "my mother",
    //       sister: "my sister",
    //       sisterIsMarried: true,
    //     },
    //   ],
    // ]);
  };

  console.log({ store });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={myfun}>set state</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
