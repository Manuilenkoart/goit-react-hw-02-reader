import React from 'react';
import T from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ currentPublication }) => (
  <article className={styles.publications}>
    <h2>{currentPublication.title}</h2>
    <p>{currentPublication.text}</p>
  </article>
);
Publication.propTypes = {
  currentPublication: T.objectOf(T.string).isRequired,
};
export default Publication;
