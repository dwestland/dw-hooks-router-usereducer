export const SET_IS_ONLINE = 'SET_IS_ONLINE'
export const SET_SCREEN_WIDTH = 'SET_SCREEN_WIDTH'
export const SET_ZIP = 'SET_ZIP'
export const SET_IS_EU = 'SET_IS_EU'
export const SET_COUNTRY_CODE = 'SET_COUNTRY_CODE'

export default function reducer(state, action) {
  switch(action.type) {
    case SET_IS_ONLINE:
    return {
      ...state,
      isOnline: action.payload
    }
    case SET_SCREEN_WIDTH:
    return {
      ...state,
      screenWidth: action.payload
    }
    case SET_ZIP:
    return {
      ...state,
      zip: action.payload
    }
    case SET_IS_EU:
    return {
      ...state,
      isEu: action.payload
    }
    case SET_COUNTRY_CODE:
    return {
      ...state,
      countryCode: action.payload
    }
    default:
      return state
  }
}
