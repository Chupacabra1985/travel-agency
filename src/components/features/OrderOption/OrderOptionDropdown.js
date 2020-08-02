import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';

// eslint-disable-next-line react/prop-types
const OrderOptionDropdown = ({values, required, currentValue, setOptionValue}) => (
  <select
    className={styles.dropdown}
    value={currentValue}
    onChange={event => setOptionValue(event.currentTarget.value)}
  >
    {required ? '' : (
      <option key='null' value=''>---</option>
    )}
    {/* eslint-disable-next-line react/prop-types */}
    {values.map(value => (
      <option key={value.id} value={value.id}>{value.name} ({formatPrice(value.price)})</option>
    ))}
  </select>
);

export default OrderOptionDropdown;
