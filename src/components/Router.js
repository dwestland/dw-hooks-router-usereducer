import React from 'react'
import { BrowserRouter, Route} from "react-router-dom"

import Header from './Header'

import Home from './Home'
import About from './About'
import Topics from './Topics'
import People from './People'
import Settings from './Settings'

// Created Router component due to react-router bug:
// The non-router components from React Router rely on being descendants of a router component (<BrowserRouter>, <MemoryRouter>, <Router>, etc.). That error means that you are trying to render a <Link> component from React Router, but that it doesn't have an ancestor router component.
// https://github.com/ReactTraining/react-router/issues/6140

export default function Router() {

  return (
    <BrowserRouter>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/people" component={People} />
        <Route path="/settings" component={Settings} />
      </div>
    </BrowserRouter>
  )
}
