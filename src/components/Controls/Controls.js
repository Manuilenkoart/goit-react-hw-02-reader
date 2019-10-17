import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ onIncrement, onDecrement, currentPage, lastPage }) => {
  return (
    <section className={styles.controls}>
      <button
        type="button"
        disabled={currentPage === 1}
        className={styles.button}
        onClick={onDecrement}
      >
        Назад
      </button>

      <button
        type="button"
        disabled={currentPage === lastPage}
        className={styles.button}
        onClick={onIncrement}
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
};

export default Controls;
