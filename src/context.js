import React from 'react'

const DogMeetDogContext = React.createContext({
  isOnline: false,
  screenWidth: 0,
  zip: 90025,
  is_eu: '',
  country_code: '',
})

export default DogMeetDogContext
