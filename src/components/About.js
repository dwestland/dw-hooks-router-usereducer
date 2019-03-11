import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-fetch'

export default function About() {
  const IPDATA_KEY = '43cf04496859365fbad92d9399f34f844805aa9e2288b0a279dc0ce5'
  const url = `https://api.ipdata.co?api-key=${IPDATA_KEY}`


  // Set zip
  const [zip, setZip] = useState('no zip yet')

  useEffect(() => {
    console.log('%c useEffect zip ', 'background: black; color: white', )
    localStorage.setItem('zip', zip)
  }, [zip])


  // Set isEu
  const [isEu, setIsEu] = useState(null)

  useEffect(() => {
    console.log('%c useEffect isEu ', 'background: black; color: white', )
    localStorage.setItem('isEu', isEu)
  }, [isEu])

  // Set countryCode
  const [countryCode, setCountryCode] = useState(null)

  useEffect(() => {
    console.log('%c useEffect countryCode ', 'background: black; color: white', )
    localStorage.setItem('countryCode', countryCode)
  }, [countryCode])

  // Fetching Ipdata
  useEffect(() => {
    fetch(url)
      .then(response => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(data => {
        console.log('%c fetch ', 'background: green; color: white', )
        console.log(data)
        console.log(data.postal)
        console.log(data.is_eu)
        console.log(data.country_code)
        setZip(data.postal)
        setIsEu(data.is_eu)
        setCountryCode(data.country_code)
      })
  }, [])

  console.log('%c I am at the bottom of the function (just before the return) ', 'background: red; color: white', )

  return (
    <div>
      <h2>About</h2>
      {zip && <p>Zip: {zip}</p>}
      {console.log('%c I just rendered ', 'background: red; color: white', )}
    </div>
  )
}
