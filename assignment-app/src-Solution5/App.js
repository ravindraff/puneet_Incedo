import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Quiz from "./components/quiz";
import Add from "./components/Add";
import QuizScoreParent from "./components/quizScoreParent";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar title="Quiz" />

        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Quiz">
            <QuizScoreParent />
          </Route>
          <Route path="/Add">
            <Add />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return <h1 className="text-center mt-5">TEST YOUR KNOWLEDGE</h1>;
}
