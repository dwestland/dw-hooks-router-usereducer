import React, { useContext, useReducer, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom"

import DwContext from '../context'
import dwReducer from '../reducer'

import Header from './Header'
import Home from './Home'
import About from './About'
import Topics from './Topics'

// export const UserContext = React.createContext()

export default function App() {
  const initialState = useContext(DwContext)
  const [state, dispatch] = useReducer(dwReducer, initialState)

  // const { state: { zip = {} }, dispatch } = useContext(DwContext)

  return (
    <DwContext.Provider value={{ state, dispatch}}>
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
      <h1>{state.zip}</h1>
    </DwContext.Provider>
  )
}


// TODO - Move DwContext to index.js ???
