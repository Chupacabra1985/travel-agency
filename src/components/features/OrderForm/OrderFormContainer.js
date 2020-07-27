import {getOrderOptions} from '../../../redux/orderRedux';
import {connect} from 'react-redux';
import OrderForm from './OrderForm';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

export default connect(mapStateToProps)(OrderForm);



