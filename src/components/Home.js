import React, { useState, useEffect, useContext } from 'react'
import { debounce } from 'debounce'
import * as dwReducer from '../reducer'
import DwContext from '../context'

export default function Home() {
  const { state, dispatch } = useContext(DwContext)

  // Online status event listener
  useEffect(() => {
    let onlineStatus = window.navigator.onLine
    dispatch({ type: dwReducer.SET_IS_ONLINE, payload: onlineStatus })
    window.addEventListener("online", () => (dispatch({ type: dwReducer.SET_IS_ONLINE, payload: true })))
    window.addEventListener("offline", () => (dispatch({ type: dwReducer.SET_IS_ONLINE, payload: false })))
  }, [])

  // Screen width event listener
  let screenWidth
  
  const resize = () => {
    screenWidth = window.innerWidth
    dispatch({ type: dwReducer.SET_SCREEN_WIDTH, payload: screenWidth })
  }

  useEffect(() => {
    screenWidth = window.innerWidth
    dispatch({ type: dwReducer.SET_SCREEN_WIDTH, payload: screenWidth })
    window.onresize = debounce(resize, 300);
  }, [])

  return (
    <div>
      <h2>Home <span role="img" aria-label="Cool Kid emoji">😎</span></h2>
      
      <h4>Global State</h4>
      <p>Internet Status: {state.isOnline ? "Online" : "Offline"}</p>
      <p>Screen Width: {state.screenWidth}</p>
      <p>Zip: {state.zip}</p>
      <p>Is EU: {state.isEu ? "TRUE" : "FALSE"}</p>
      <p>Country Code: {state.countryCode}</p>

    </div>
  )
}
