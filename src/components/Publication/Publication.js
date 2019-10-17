import React from 'react';
import T from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ currentPublication, currentPage }) => (
  <article className={styles.publications}>
    <h2>
      {currentPage}.{currentPublication.title}
    </h2>
    <p>{currentPublication.text}</p>
  </article>
);
Publication.propTypes = {
  currentPublication: T.objectOf(T.string).isRequired,
  currentPage: T.number.isRequired,
};
export default Publication;
