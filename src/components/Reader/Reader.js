import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';
// import publications from '../Publication/publications.json';
import styles from './Reader.module.css';

export default class Reader extends Component {
  static propTypes = {
    pageNumber: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  };

  static defaultProps = {
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
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  handleDecrement = () => {
    // if (this.state.pageNumber === this.props.pageNumber) {
    //   return;
    // }
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber - 1,
    }));
  };

  render() {
    const { pageNumber } = this.state;
    const { items } = this.props;
    return (
      <div className={styles.reader}>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          currentPage={pageNumber}
          lastPage={items.length}
        />
        <Counter lastPage={items.length} currentPage={pageNumber} />
        <Publication
          currentPublication={items[pageNumber - 1]}
          currentPage={pageNumber}
        />
      </div>
    );
  }
}
