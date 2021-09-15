import "./App.css";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const [status, setStatus] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Form setUser={setUser} status={status} setStatus={setStatus} />
      </header>
    </div>
  );
}

export default App;
