import React, { Component } from 'react';
import { render } from 'react-dom';
import Child1 from './Child1';
import Child2 from './Child2';
import Child3 from './Child3';
import Child4 from './Child4';

import './style.css';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import action from './action';
import action2 from './action2';
import otherAction from './otherAction';
import reducerCreator from './reducerCreator';
import reducerTemplate from './reducerTemplate';
import reducerTemplate3 from './reducerTemplate3';
import otherReducer from './otherReducer';

// reuse reducer
const rootReducer = combineReducers({
  value1FromRedux: reducerCreator(reducerTemplate, false, "reducerTemplate"),
  value2FromRedux: reducerCreator(reducerTemplate, true, "reducerTemplate"),
  value3FromRedux: reducerCreator(reducerTemplate3, true, "reducerTemplate3"),
  value4FromRedux: otherReducer,
});
const store = createStore(rootReducer);

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let val1, val2, val3, val4;
    return (
      <div>
        <div>
          <button onClick={() => {
            val1 = parseInt(Math.random()*100);
            store.dispatch(action({productDetails: {price: val1}, sourceMiniPDP: false}));
          }}>update pdp product details</button>
          <button onClick={() => {
            store.dispatch(action({productDetails: {price: val1}, sourceMiniPDP: false}));
          }}>resend</button>
        </div>

        <div>
          <button onClick={() => {
            val2 = parseInt(Math.random()*100);
            store.dispatch(action({productDetails: {price: val2}, sourceMiniPDP: true}));
          }}>update mini-pdp product details</button>
          <button onClick={() => {
            store.dispatch(action({productDetails: {price: val2}, sourceMiniPDP: true}));
          }}>resend</button>
        </div>
        =====
        <div>
          <button onClick={() => {
            val3 = parseInt(Math.random()*100);
            store.dispatch(action2({prodOptions: {options: val3}, sourceMiniPDP: true}));
          }}>update mini-pdp product options</button>
          <button onClick={() => {
            store.dispatch(action2({prodOptions: {options: val3}, sourceMiniPDP: true}));
          }}>resend</button>
        </div>
        =====
        <div>
          <button onClick={() => {
            val4 = parseInt(Math.random()*100);
            store.dispatch(otherAction({other: val4}));
          }}>update other redux state</button>
          <button onClick={() => {
            store.dispatch(otherAction({other: val4}));
          }}>resend</button>
        </div>
        ===
        <Child1 />
        <Child2 />
        <Child3 />
        <Child4 />
      </div>
    );
  }
}

render(<Provider store={store}><App/></Provider>, document.getElementById('root'));