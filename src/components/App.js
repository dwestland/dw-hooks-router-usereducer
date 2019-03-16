import React, { useContext, useReducer } from 'react'
// import { BrowserRouter as Router, Route} from "react-router-dom"

import DwContext from '../context'
import dwReducer from '../reducer'

import Router from './Router'

import Header from './Header'
import Home from './Home'
import About from './About'
import Topics from './Topics'
import People from './People'

// export const UserContext = React.createContext()

export default function App() {
  const initialState = useContext(DwContext)
  const [state, dispatch] = useReducer(dwReducer, initialState)

  // const { state: { zip = {} }, dispatch } = useContext(DwContext)

  return (
    <DwContext.Provider value={{ state, dispatch}}>
      <Router />
    </DwContext.Provider>
  )
}
