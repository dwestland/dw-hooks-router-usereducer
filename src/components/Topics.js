import React, { useState, useEffect } from 'react'
import { Route, Link } from "react-router-dom";

function Topic({ match }) {
  console.log('%c match ', 'background: red; color: white', match)
  return <h3>Requested Param: {match.params.id}</h3>
}


export default function Topics({ match }) {

  // Simple Counter - local sate test
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  return (
    <div>
      <h2>Topics</h2>

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>   
  )
}