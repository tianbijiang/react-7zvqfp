export default function(state={}, action) {
  switch (action.type) {
    case 'UPDATE_3':
      return action.payload.other;
    default:
      return state;
  }
}
