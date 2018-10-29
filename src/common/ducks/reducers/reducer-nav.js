const initialState = {
  open: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_BUTTON":
      let x = Object.assign({}, state, {
        open: !state.open
      });
      return x;
    default:
      return state;
  }
}
