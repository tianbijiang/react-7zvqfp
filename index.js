import React, { Component } from 'react';
import { render } from 'react-dom';
import Child1 from './Child1';
import Child2 from './Child2';

import './style.css';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import action from './action';
import action2 from './action2';
import reducerCreator from './reducerCreator';
import reducerTemplate from './reducerTemplate';

// reuse reducer
const rootReducer = combineReducers({
  value1FromRedux: reducerCreator(reducerTemplate, false),
  value2FromRedux: reducerCreator(reducerTemplate, true),
});
const store = createStore(rootReducer);

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <div>
          <button onClick={() => {
            store.dispatch(action({productDetails: {price: parseInt(Math.random()*100)}, sourceMiniPDP: false}));
          }}>update pdp product details</button>
        </div>

        <div>
          <button onClick={() => {
            store.dispatch(action({productDetails: {price: parseInt(Math.random()*100)}, sourceMiniPDP: true}));
          }}>update mini-pdp product details</button>
        </div>
        =====
        <div>
          <button onClick={() => {
            store.dispatch(action2({blah: "blah", sourceMiniPDP: true}));
          }}>update mini-pdp product options</button>
        </div>
        =====
        <Child1 />
        <Child2 />
      </div>
    );
  }
}

render(<Provider store={store}><App/></Provider>, document.getElementById('root'));