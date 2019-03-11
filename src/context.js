import { createContext } from 'react'

const DogMeetDogContext = createContext({

  isOnline: false,
  screenWidth: 0,
  zip: 90025,
  is_eu: '',
  country_code: '',

})

export default DogMeetDogContext
