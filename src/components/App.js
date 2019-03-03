import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Header from './Header'
import Home from './Home'
import About from './About'
import Topics from './Topics'

export default function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  )
}
