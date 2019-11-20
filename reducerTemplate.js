const defaultState = {
    pdpAttribute: {},
    minipdpAttribute: [],
};

export default function(state, action) {
  switch (action.type) {
    case 'UPDATE':
      // option 1
      // if (action.payload.sourceMiniPDP) return [action.payload.productDetails];
      // return action.payload.productDetails;

      // option 2
      return action.payload.productDetails;

    default:
      return state;
  }
}
