import React from 'react';
import { connect } from 'react-redux';

class Child1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("pdp");
    return (
      <div>
        pdp product details: {JSON.stringify(this.props.value)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.value1FromRedux,
});

export default connect(mapStateToProps)(Child1);

