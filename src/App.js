import React from "react";
import { Route } from "react-router-dom";
// container
import { Chat, SignUp, Signin } from "./containers";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Signin} exact />
      <Route path="/signup" component={SignUp} />
      <Route path="/chat" component={Chat} />
    </div>
  );
}

export default App;
