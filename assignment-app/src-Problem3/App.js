import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import QuizScoreParent from "./components/quizScoreParent";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar title="Quiz" />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Quiz">
            <QuizScoreParent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return <h1 className="text-center mt-5">TEST YOUR KNOWLEDGE</h1>;
}
