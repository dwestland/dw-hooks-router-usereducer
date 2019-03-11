import React, { useState, useEffect, useContext } from 'react'
import fetch from 'isomorphic-fetch'
import * as dwReducer from '../reducer'
import DwContext from '../context'

export default function About() {
  const { state, dispatch } = useContext(DwContext)
  const IPDATA_KEY = 'x'
  const url = `https://api.ipdata.co?api-key=${IPDATA_KEY}`


  // // Set zip
  // const [zip, setZip] = useState('no zip yet')

  // useEffect(() => {
  //   dispatch({ type: dwReducer.SET_ZIP, payload: zip })
  //   localStorage.setItem('zip', zip)
  // }, [zip])


  // // Set isEu
  // const [isEu, setIsEu] = useState(null)

  // useEffect(() => {
  //   console.log('%c useEffect isEu ', 'background: black; color: white', )
  //   dispatch({ type: dwReducer.SET_IS_EU, payload: isEu })
  //   localStorage.setItem('isEu', isEu)
  // }, [isEu])

  // // Set countryCode
  // const [countryCode, setCountryCode] = useState(null)

  // useEffect(() => {
  //   console.log('%c useEffect countryCode ', 'background: black; color: white', )
  //   dispatch({ type: dwReducer.SET_COUNTRY_CODE, payload: countryCode })
  //   localStorage.setItem('countryCode', countryCode)
  // }, [countryCode])

  // Fetching Ipdata

  // if(localStorage.getItem(zip).length == 5) {
  //   return null
  // }

  console.log('%c localStorage.getIem(zip).length ', 'background: red; color: white', localStorage.getItem('zip').length);

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        // console.log(data.postal)
        // console.log(data.is_eu)
        // console.log(data.country_code)
        // dispatch({ type: dwReducer.SET_ZIP, payload: data.postal })
        // dispatch({ type: dwReducer.SET_IS_EU, payload: data.is_eu })
        // dispatch({ type: dwReducer.SET_COUNTRY_CODE, payload: data.country_code })
        // localStorage.setItem('zip', data.postal)
        // localStorage.setItem('isEu', data.is_eu)
        // localStorage.setItem('countryCode', data.country_code)
      })
  }, [])

  return (
    <div>
      <h2>About</h2>
    </div>
  )
}
