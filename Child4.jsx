import React from 'react';
import { connect } from 'react-redux';

class Child4 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("non related component rerender");
    return (
      <div>non-pdp related component: {JSON.stringify(this.props.value)}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.value4FromRedux,
});

export default connect(mapStateToProps)(Child4);

