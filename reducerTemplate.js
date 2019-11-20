const defaultState = {
    pdpAttribute: {},
    minipdpAttribute: [],
};

export default function(state=[], action) {
  switch (action.type) {
    case 'UPDATE':
      return action.payload.productDetails;
    default:
      return state;
  }
}
