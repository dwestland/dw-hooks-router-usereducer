import React, { useContext, useReducer } from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom"

import DwContext from '../context'
import dwReducer from '../reducer'

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
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route path="/people" component={People} />
        </div>
      </Router>
    </DwContext.Provider>
  )
}
