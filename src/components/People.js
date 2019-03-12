import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-fetch'

export default function People() {

const [people, setPeople] = useState({})

  // Fetch ipdata.co client info
  useEffect(() => {
    const url = 'https://randomuser.me/api/?nat=gb&results=10'
    fetch(url)
      .then(response => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        setPeople(data)
        // console.log(data.postal)
        // console.log(data.is_eu)
        // console.log(data.country_code)
        // dispatch({ type: dwReducer.SET_ZIP, payload: data.postal })
        // dispatch({ type: dwReducer.SET_IS_EU, payload: data.is_eu })
        // dispatch({ type: dwReducer.SET_COUNTRY_CODE, payload: data.country_code })
        // localStorage.setItem('zip', data.postal)
        // localStorage.setItem('isEu', data.is_eu)
        // localStorage.setItem('countryCode', data.country_code)
        // console.log('%c Fetch Success ', 'background: red; color: white', );
      })
  }, [])


console.log('%c people ', 'background: red; color: white', people)



  return (
    <div>
      <h2>People</h2>
    </div>
  )
}
