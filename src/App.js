import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import DevCard from "./components/DevCard";
import { Switch, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App-content">
      <Switch>
        <Route exact path="/">
          <Form setUser={setUser} />
        </Route>
        <Route path="/card">
          <DevCard user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
