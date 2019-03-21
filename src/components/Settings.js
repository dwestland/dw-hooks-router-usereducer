import React, { useContext } from 'react'

import DwContext from '../context'

export default function Settings() {
  const { state } = useContext(DwContext)

  if(process.env.NODE_ENV === 'production') {
    console.log('%c PRODUCTION ', 'background: red; color: white', )
  }

  if(process.env.NODE_ENV === 'development') {
    console.log('%c DEVELOPMENT ', 'background: red; color: white', )
  }

  let isEuResult
  let isEu = state.isEu
  if(isEu === null) {
    isEuResult = "NULL"
  } else {
    isEuResult = isEu ? "TRUE" : "FALSE"
  }

  return (
    <div>
      <h2>Settings</h2>
        <div>
          <h4>Global State</h4>
          <p>Internet Status: {state.isOnline ? "Online" : "Offline"}</p>
          <p>Device Screen Size: {state.deviceScreenSize}</p>
          <p>Zip: {state.zip}</p>
          <p>Is EU: {isEuResult}</p>
          <p>Country Code: {state.countryCode}</p>
        </div>
    </div>
  )
}
