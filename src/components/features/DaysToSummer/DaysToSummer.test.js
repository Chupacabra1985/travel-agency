import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  description: '.description',
};

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer/>);
    expect(component).toBeTruthy();
  });
  it('should render description', () => {
    const component = shallow(<DaysToSummer/>);
    expect(component.exists(select.description)).toEqual(true);
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate));
  }
};

const checkDescriptionAtDay = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T09:00:00.000Z`);

    const component = shallow(<DaysToSummer/>);
    const renderedDescription = component.find(select.description).text();
    expect(renderedDescription).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer should return empty String', () => {
  checkDescriptionAtDay('2019-06-21', '');
  checkDescriptionAtDay('2019-09-23', '');
});

describe('Component DaysToSummer should return correct description', () => {
  checkDescriptionAtDay('2019-03-20', '93 days to summer!');
  checkDescriptionAtDay('2019-06-20', '1 day to summer!');
  checkDescriptionAtDay('2019-09-24', '271 days to summer!');
});
