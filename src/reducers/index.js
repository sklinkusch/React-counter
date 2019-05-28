
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
        date: new Date().toLocaleTimeString('de-DE', { timeZone: "Europe/Berlin", day: "2-digit", month: "2-digit", year: "numeric" })
      }
    case 'DECREASE':
      return {
        count: state.count - 1,
        click: state.click + 1,
        status: "DECREASED",
        date: new Date().toLocaleTimeString('de-DE', { timeZone: "Europe/Berlin", day: "2-digit", month: "2-digit", year: "numeric" })
      }
    case 'RESET':
      return {
        count: 0,
        click: state.click,
        status: "RESETTED",
        date: new Date().toLocaleTimeString('de-DE', { timeZone: "Europe/Berlin", day: "2-digit", month: "2-digit", year: "numeric" })
      }
    default:
      return state;
  }
}