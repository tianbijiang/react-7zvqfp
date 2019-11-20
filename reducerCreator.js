const defaultState = {
    pdpAttribute: {},
    minipdpAttribute: [],
};

export default function (reducerFunction, sourceMiniPDP, reducerName) {
    return (state, action) => {
        if (state === undefined) {
            return sourceMiniPDP ? defaultState.minipdpAttribute : defaultState.pdpAttribute;
        }
        if (action.payload.sourceMiniPDP !== sourceMiniPDP) {
          return state;
        }

        // option 1
        // return reducerFunction(state, action);
        
        // option2
        if (action.payload.sourceMiniPDP) {
            const inputState = state[0];
            const newMiniPDPState = reducerFunction(inputState, action);
            if (inputState !== newMiniPDPState) {
                return [newMiniPDPState];
            }
            return state;
        }
        return reducerFunction(state, action);
    };
}
