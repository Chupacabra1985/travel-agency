import React from 'react';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';


// eslint-disable-next-line react/prop-types
const OrderSummary = ({tripCost, options}) => (
  <h2 className={styles.component}>Total: <strong>{calculateTotal(formatPrice(tripCost), options)}</strong></h2>
);

OrderSummary.prototypes = {
  tripCost: PropTypes.string,
  options: PropTypes.string,
};

export default OrderSummary;
