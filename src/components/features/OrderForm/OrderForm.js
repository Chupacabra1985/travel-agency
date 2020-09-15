import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import settings from '../../../data/settings';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';


const sendOrder = (options, tripCost, tripId, tripName) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    options,
    tripName,
    tripId,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const active = (options) => {
  return options['name'].length > 0 && options['contact'].length > 0;
};


// eslint-disable-next-line react/prop-types
const OrderForm = ({tripCost, options, setOrderOption, tripId, tripName}) => (
  <Row>
    {pricing.map(pricing => (
      <Col md={4} key={pricing.id}><OrderOption {...pricing} currentValue={options[pricing.id]} setOrderOption={setOrderOption}/></Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options}/>
    </Col>
    <button disabled={!active(options)} onClick={() => sendOrder(options, tripCost, tripId, tripName)}>Order now!</button>
  </Row>
);

OrderForm.prototypes = {
  tripId: PropTypes.string,
  tripName: PropTypes.string,
  tripCost: PropTypes.string,
  options: PropTypes.string,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
