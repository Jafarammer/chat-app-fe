import React, { useState } from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import { getAccessToken } from "./utils/Token";
// container
import { Home, Chat, SignUp, Signin } from "./containers";

function App() {
  const token = getAccessToken();
  const [render, setRender] = useState("");
  return (
    <div className="App">
      {/* <Router> */}
      <Switch>
        <Route path="/" exact>
          {token ? <Home /> : <Redirect to="/signin" />}
        </Route>
        <Route path="/chat">
          {token ? <Chat /> : <Redirect to="/signin" />}
        </Route>
        <Route path="/signin">
          {token ? (
            <Redirect to="/" />
          ) : (
            <Signin render={render} setRender={setRender} />
          )}
        </Route>
        <Route path="/signup">{token ? <Redirect to="/" /> : <SignUp />}</Route>
      </Switch>
      {/* </Router> */}
      {/* <Route path="/" component={Home} exact /> */}
      {/* <Route path="/chat" component={Chat} /> */}
    </div>
  );
}

export default App;
