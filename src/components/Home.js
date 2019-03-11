import React, { useEffect, useContext } from 'react'
import { debounce } from 'debounce'
import fetch from 'isomorphic-fetch'
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

  // Fetch ipdata.co client info
  useEffect(() => {
    const ipdataKey = process.env.REACT_APP_IPDATA_KEY
    const url = `https://api.ipdata.co?api-key=${ipdataKey}`
    fetch(url)
      .then(response => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        console.log(data.postal)
        console.log(data.is_eu)
        console.log(data.country_code)
        dispatch({ type: dwReducer.SET_ZIP, payload: data.postal })
        dispatch({ type: dwReducer.SET_IS_EU, payload: data.is_eu })
        dispatch({ type: dwReducer.SET_COUNTRY_CODE, payload: data.country_code })
        localStorage.setItem('zip', data.postal)
        localStorage.setItem('isEu', data.is_eu)
        localStorage.setItem('countryCode', data.country_code)
        console.log('%c Fetch Success ', 'background: red; color: white', );
      })
  }, [])

  let isEu = state.isEu
  let isEuResult
  if(isEu === null) {
    isEuResult = "NULL"
  } else {
    isEuResult = isEu ? "TRUE" : "FALSE"
  }

  return (
    <div>
      <h2>Home <span role="img" aria-label="Cool Kid emoji">😎</span></h2>
      
      <h4>Global State</h4>
      <p>Internet Status: {state.isOnline ? "Online" : "Offline"}</p>
      <p>Screen Width: {state.screenWidth}</p>
      <p>Zip: {state.zip}</p>
      <p>Is EU: {isEuResult}</p>
      <p>Country Code: {state.countryCode}</p>

    </div>
  )
}
