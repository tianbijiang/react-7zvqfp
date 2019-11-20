import React from 'react';
import { connect } from 'react-redux';

class Child2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("mini");
    return (
      <div>mini pdp product details: {JSON.stringify(this.props.value)}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.value2FromRedux,
});

export default connect(mapStateToProps)(Child2);

