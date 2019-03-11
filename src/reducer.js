export default function reducer(state, action) {
  switch(action.type) {
    case "SET_ONLINE_STATUS":
      return {
        ...state,
        todos: action.payload
      }
    case "SET_SCREEN_WIDTH":
      return {
        ...state,
        todos: action.payload
      }
    default:
      return state
  }
}