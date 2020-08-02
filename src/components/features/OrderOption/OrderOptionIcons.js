import React from 'react';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import ReactHtmlParser from 'react-html-parser';
import {formatPrice} from '../../../utils/formatPrice';

class OrderOptionIcons extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      selected: {},
    };
    this.selectItem = this.selectItem.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  selectItem(value){
    let selected = this.state.selected;
    selected[value.id] = !selected[value.id];
    this.setState({selected: selected});
  }

  renderItem(value) {
    // eslint-disable-next-line react/prop-types
    const {setOptionValue} = this.props;
    let className = this.state.selected[value.id] ? styles.iconActive : styles.icon;
    let onClick = this.selectItem.bind(this, value);
    return <div className={className} key={value.id} onClick={function(){ onClick(); setOptionValue(value.id);}}>
      <Icon name={value.icon}/> {ReactHtmlParser(value.name)} {ReactHtmlParser(formatPrice(value.price))}
    </div>;
  }


  render() {
    // eslint-disable-next-line react/prop-types
    const {values, required, setOptionValue} = this.props;
    const emptyString = '';
    return (
      <div className={styles.icon}>
        {required ? '' : (
          <div onClick={setOptionValue(emptyString)}><Icon name={'times-circle'}/> {ReactHtmlParser('none')} </div>
        )}
        {/* eslint-disable-next-line react/prop-types */}
        {values.map(value => (this.renderItem(value)))}
      </div>
    );
  }
}

export default OrderOptionIcons;
