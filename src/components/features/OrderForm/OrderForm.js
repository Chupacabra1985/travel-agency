import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';


// eslint-disable-next-line react/prop-types
const OrderForm = ({tripCost, options, setOrderOption}) => (
  <Row>
    {pricing.map(pricing => (
      <Col md={4} key={pricing.id}><OrderOption {...pricing} currentValue={options[pricing.id]} setOrderOption={setOrderOption}/></Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options}/>
    </Col>
  </Row>
);

OrderForm.prototypes = {
  tripCost: PropTypes.string,
  options: PropTypes.string,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
