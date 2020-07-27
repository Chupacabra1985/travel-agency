import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const OrderForm = ({tripCost, options}) => (
  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options}/>
    </Col>
  </Row>
);

OrderForm.prototypes = {
  tripCost: PropTypes.string,
  options: PropTypes.string,
};

export default OrderForm;
