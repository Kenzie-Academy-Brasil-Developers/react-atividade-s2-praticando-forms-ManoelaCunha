import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import DevCard from "./components/DevCard";

function App() {
  const [user, setUser] = useState({});
  const [status, setStatus] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {!status ? (
          <Form setUser={setUser} status={status} setStatus={setStatus} />
        ) : (
          <DevCard user={user} status={status} setStatus={setStatus} />
        )}
      </header>
    </div>
  );
}

export default App;
