const initialState = {
  time: 0
};

export function ChangeTimeReducer(state = initialState, action) {
  switch (action.type) {
    case "START-TIME":
      return {
        time: state.time + 1
      };
    case "STOP-TIME":
      return {
        time: state.time
      };
    default:
      return { state };
  }
}
