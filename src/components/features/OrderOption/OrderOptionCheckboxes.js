import React from 'react';
import styles from './OrderOption.scss';
import ReactHtmlParser from 'react-html-parser';
import {formatPrice} from '../../../utils/formatPrice';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

// eslint-disable-next-line react/prop-types
const OrderOptionCheckboxes = ({values, currentValue, setOptionValue}) => (
  <div className={styles.checkboxes}>
    {/* eslint-disable-next-line react/prop-types */}
    {values.map(value => (
      <label key={value.id}><input type='checkbox'value={value.id} onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}/>{ReactHtmlParser(value.name)} {ReactHtmlParser(formatPrice(value.price))}</label>
    ))}
  </div>
);

export default OrderOptionCheckboxes;
