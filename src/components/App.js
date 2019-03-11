import React, { useContext, useReducer, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom"

import DogMeetDogContext from '../context'
import dogMeetDogReducer from '../reducer'

import Header from './Header'
import Home from './Home'
import About from './About'
import Topics from './Topics'

// export const UserContext = React.createContext()

export default function App() {
  const initialState = useContext(DogMeetDogContext)
  const [state, dispatch] = useReducer(dogMeetDogReducer, initialState)

  // const { state: { zip = {} }, dispatch } = useContext(DogMeetDogContext)

  return (
    <DogMeetDogContext.Provider value={{ state, dispatch}}>
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
      <h1>{DogMeetDogContext.zip}</h1>
    </DogMeetDogContext.Provider>
  )
}


// TODO - Move DogMeetDogContext to index.js ???
