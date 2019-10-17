import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
import publications from '../Publication/publications.json';
import styles from './Reader.module.css';

export default class Reader extends Component {
  static propTypes = {
    step: PropTypes.number,
    pageNumber: PropTypes.number,
  };

  static defaultProps = {
    step: 1,
    pageNumber: 1,
  };

  state = {
    pageNumber: this.props.pageNumber,
  };

  handleIncrement = () => {
    // if (this.state.pageNumber === publications.length) {
    //   return;
    // }
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + this.props.step,
    }));
  };

  handleDecrement = () => {
    // if (this.state.pageNumber === this.props.pageNumber) {
    //   return;
    // }
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber - this.props.step,
    }));
  };

  render() {
    const { pageNumber } = this.state;
    return (
      <div className={styles.reader}>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          currentPage={pageNumber}
          lastPage={publications.length}
        />
        <Counter lastPage={publications.length} currentPage={pageNumber} />
        <Publication currentPublication={publications[pageNumber - 1]} />
      </div>
    );
  }
}
