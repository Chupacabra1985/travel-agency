import React from 'react';
import styles from './OrderOption.scss';

// eslint-disable-next-line react/prop-types
const OrderOptionText = ({currentValue, setOptionValue}) => (
  <div className={styles.number}>
    <input className={styles.input} type='text' value={currentValue}  onChange={event => setOptionValue(event.currentTarget.value)}/>
  </div>
);

export default OrderOptionText;
