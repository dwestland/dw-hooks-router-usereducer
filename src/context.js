import React from 'react'

const DwContext = React.createContext({
  isOnline: false,
  screenWidth: 0,
  zip: 90025,
  isEu: null,
  countryCode: '',
})

export default DwContext
