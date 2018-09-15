import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { decrement, increment } from '../../../redux/counterActions';

class Counter extends React.PureComponent {
  render() {
    const {
      decrement: minus,
      increment: plus,
      count: number
    } = this.props;
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button type="button" onClick={minus}>-</button>
          <span>{number}</span>
          <button type="button" onClick={plus}>+</button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = {
  decrement,
  increment
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
