import { head } from 'lodash';

const defaultState = {
    pdpAttribute: {},
    minipdpAttribute: [],
};

export default function (reducerFunction, sourceMiniPDP) {
    return (state, action) => {
        if (state === undefined) {
            return sourceMiniPDP ? defaultState.minipdpAttribute : defaultState.pdpAttribute;
        }

        if (action.payload.sourceMiniPDP !== sourceMiniPDP) {
            return state;
        }
        return reducerFunction(state, action);
        if (action.payload.sourceMiniPDP) {
            const inputState = head(state);
            const newMiniPDPState = reducerFunction(inputState, action);
            console.log("trigger");
            if (inputState !== newMiniPDPState) {
                return [newMiniPDPState];
            }
        } else {
            return reducerFunction(state, action);   //Normal PDP reducer call
        }
    };
}
