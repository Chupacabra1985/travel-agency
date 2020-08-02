import React from 'react';
import styles from './OrderOption.scss';

// eslint-disable-next-line react/prop-types
const OrderOptionNumber = ({limits, currentValue, setOptionValue}) => (
  <div className={styles.number}>
    <input className={styles.inputSmall} type='number' value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
      /* eslint-disable-next-line react/prop-types */
      min={limits.min} max={limits.max}/></div>
);

export default OrderOptionNumber;
