import React, { useEffect, useContext, useReducer } from 'react'
import { debounce } from 'debounce'
import fetch from 'isomorphic-fetch'

import DwContext from '../context'
import dwReducer, * as CONSTANTS from '../reducer'
import Router from './Router'

// TODO Check local storage for zip before calling API

export default function App() {
  const initialState = useContext(DwContext)
  const [state, dispatch] = useReducer(dwReducer, initialState)

    // Online status event listener
    useEffect(() => {
      let onlineStatus = window.navigator.onLine
      dispatch({ type: CONSTANTS.SET_IS_ONLINE, payload: onlineStatus })
      window.addEventListener("online", () => (dispatch({ type: CONSTANTS.SET_IS_ONLINE, payload: true })))
      window.addEventListener("offline", () => (dispatch({ type: CONSTANTS.SET_IS_ONLINE, payload: false })))
    }, [])

    // Screen width event listener
    let screenWidth

    const resize = () => {
      screenWidth = window.innerWidth
      setDeviceScreenSize(screenWidth)
    }

    const setDeviceScreenSize = (width) => {
      if(width >= 1200) {
        dispatch({ type: CONSTANTS.SET_DEVICE_SCREEN_SIZE, payload: 'desktop' })
      } else if (width >= 600 && width <= 1199) {
        dispatch({ type: CONSTANTS.SET_DEVICE_SCREEN_SIZE, payload: 'tablet' })
      } else {
        dispatch({ type: CONSTANTS.SET_DEVICE_SCREEN_SIZE, payload: 'phone' })
      }
    }

    useEffect(() => {
      screenWidth = window.innerWidth
      setDeviceScreenSize(screenWidth)
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
          dispatch({ type: CONSTANTS.SET_ZIP, payload: data.postal })
          dispatch({ type: CONSTANTS.SET_IS_EU, payload: data.is_eu })
          dispatch({ type: CONSTANTS.SET_COUNTRY_CODE, payload: data.country_code })
          localStorage.setItem('zip', data.postal)
          localStorage.setItem('isEu', data.is_eu)
          localStorage.setItem('countryCode', data.country_code)
          console.log('%c Fetch Success ', 'background: red; color: white', );
        })
    }, [])

    let isEu = state.isEu
    if(isEu === null) {
      let isEuResult = "NULL"
    } else {
      let isEuResult = isEu ? "TRUE" : "FALSE"
    }

  return (
    <DwContext.Provider value={{ state, dispatch}}>
      <Router />
    </DwContext.Provider>
  )
}
