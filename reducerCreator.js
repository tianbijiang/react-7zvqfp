import head from 'lodash/head';

const defaultState = {
    pdpAttribute: {},
    minipdpAttribute: [],
};

export default function (reducerFunction, sourceMiniPDP, reducerName) {
    reducerFunction.reducerName = reducerName;    // TODO: #TJ test for withReducerSaga
    return (state, action) => {
        if (state === undefined) {
            return sourceMiniPDP ? defaultState.minipdpAttribute : defaultState.pdpAttribute;
        }

        if (action.sourceMiniPDP !== sourceMiniPDP &&
            (!action.payload || action.payload.sourceMiniPDP !== sourceMiniPDP)) {
            return state;
        }

        if (sourceMiniPDP && (action.sourceMiniPDP || (action.payload && action.payload.sourceMiniPDP))) {
            const inputState = head(state); // always first element. need to change the logic if we are showing multiple MiniPDP
            const newMiniPDPState = reducerFunction(inputState, action);
            if (inputState !== newMiniPDPState) {
                return [newMiniPDPState];
            }
            return state;
        }
        return reducerFunction(state, action);
    };
}
