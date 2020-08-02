import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class OrderOptionDate extends React.Component {

  render() {
    // eslint-disable-next-line react/prop-types
    const {setOptionValue, currentValue} = this.props;
    return (
      <DatePicker
        selected={currentValue}
        onChange={date => setOptionValue(date)}
      />
    );
  }
}

export default OrderOptionDate;
