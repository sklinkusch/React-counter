
const initialState = {
  count: 0,
  click: 0,
  status: "INIT",
  date: null
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return {
        count: state.count + 1,
        click: state.click + 1,
        status: "INCREASED",
        date: new Date()
      }
    case 'DECREASE':
      return {
        count: state.count - 1,
        click: state.click + 1,
        status: "DECREASED",
        date: new Date()
      }
    case 'RESET':
      return {
        count: 0,
        click: 0,
        status: "RESETTED",
        date: new Date()
      }
    default:
      return state;
  }
}