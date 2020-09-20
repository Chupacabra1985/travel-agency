import React from 'react';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  getDaysToSummer() {
    const presentDate = new Date();
    const oneDay = 1000 * 60 * 60 * 24;

    const summerStart = new Date(presentDate.getFullYear(), 5, 21);
    const summerFinish = new Date(presentDate.getFullYear(), 8, 23);

    if (presentDate >= summerStart && presentDate <= summerFinish) {
      return '';
    }

    if (presentDate > summerFinish) {
      summerStart.setFullYear(summerStart.getFullYear() + 1);
      summerFinish.setFullYear(summerFinish.getFullYear() + 1);
    }

    return (Math.round(summerStart.getTime() - presentDate.getTime()) / oneDay).toFixed(0);
  }

  render() {
    const daysToSummer = this.getDaysToSummer();
    let description;
    if (daysToSummer === '1') {
      description = `${daysToSummer} day to summer!`;
    } else if (daysToSummer.length > 0) {
      description = `${daysToSummer} days to summer!`;
    }

    return (
      <div className={styles.component}>
        <h3 className={styles.description}>{description}</h3>
      </div>
    );
  }

}

export default DaysToSummer;
