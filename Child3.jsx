import React from 'react';
import { connect } from 'react-redux';

class Child3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("product options rerender");
    return (
      <div>mini pdp product options: {JSON.stringify(this.props.value)}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.value3FromRedux,
});

export default connect(mapStateToProps)(Child3);

