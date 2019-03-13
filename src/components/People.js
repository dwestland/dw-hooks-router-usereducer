import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-fetch'

export default function People() {

const [people, setPeople] = useState([])

  // Fetch ipdata.co client info
  useEffect(() => {
    const url = 'https://randomuser.me/api/?nat=us&results=10'
    fetch(url)
      .then(response => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        setPeople(data.results)
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


  var array1 = [1, 4, 9, 16]
  const map1 = array1.map(x => x * 2)
  console.log('%c map1 ', 'background: blue; color: white', map1);


  const peopleList = people.map((person, index) => {
    return(
      <Person
        key={index}
        PersonObj={person}
      />
    )
  })

  console.log('%c peopleList ', 'background: red; color: white', peopleList);

  return (
    <div>
      <h2>People</h2>
      {peopleList}
    </div>
  )
}

function Person(props) {
  let x = props.PersonObj
  return(
    <div>
      <div>x</div>
    </div>
  )
}
