import { useEffect, useState } from "react";
import { getMessage } from "./services/api";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getMessage().then(setMsg);
  }, []);

  return (
    <div>
      <h1>React + Express Website</h1>
      <p>Backend says: {msg}</p>
    </div>
  );
}

export default App;
