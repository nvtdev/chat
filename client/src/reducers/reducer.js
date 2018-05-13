const initialState = { messages: [] };

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        ...state,
        messages: state.messages.push(action.message)
      }
      break;
    case 'LOAD_MESSAGES':
      return {
        ...state,
        messages: action.messages
      }
    default:
      return state;
  }
}

export default reducer;
