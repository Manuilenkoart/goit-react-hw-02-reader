import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ lastPage, currentPage }) => {
  return (
    <div className={styles.counter}>
      <p>
        {currentPage}/{lastPage}
      </p>
    </div>
  );
};
Counter.propTypes = {
  lastPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};
export default Counter;
