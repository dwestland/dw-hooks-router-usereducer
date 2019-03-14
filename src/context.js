import React from 'react'

const DwContext = React.createContext({
  isOnline: false,
  deviceScreenSize: '',
  zip: 90025,
  isEu: null,
  countryCode: '',
})

export default DwContext
