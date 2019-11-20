export default function(state, action) {
  switch (action.type) {
    case 'UPDATE_2':
      // option 1
      // if (action.payload.sourceMiniPDP) return [action.payload.prodOptions];
      // return action.payload.prodOptions;

      // option 2
      return action.payload.prodOptions;
    default:
      return state;
  }
}
