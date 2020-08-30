import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate correct link', () => {
    const id = 'abc';
    const tags = ['test', 'test'];
    const name = 'nameTest';
    const cost = '250';
    const days = 10;
    const image = 'test.jpg';
    const component = shallow(<TripSummary id={id} name={name} cost={cost} days={days} tags={tags} image={image}/>);
    expect(component.find('.link').prop('to')).toEqual(`/trip/${id}`);
  });
  it('should render correct src and alt', () => {
    const id = 'test';
    const tags = ['test', 'test'];
    const name = 'nameTest';
    const cost = '250';
    const days = 10;
    const src = 'srcTest';
    const component = shallow(<TripSummary id={id} cost={cost} days={days} tags={tags} name={name} image={src}/>);
    expect(component.find('img').prop('src')).toEqual(src);
    expect(component.find('img').prop('alt')).toEqual(name);
  });
  it('should render correct name, cost, days', () => {
    const id = 'test';
    const tags = ['test', 'test'];
    const name = 'nameTest';
    const cost = '250';
    const days = 10;
    const image = 'test.jpg';
    const component = shallow(<TripSummary id={id} tags={tags} name={name} cost={cost} days={days} image={image}/>);
    expect(component.find('.title').text()).toEqual(name);
    expect(component.find('.details span:first-child').text()).toEqual(`${days} days`);
    expect(component.find('.details span:last-child').text()).toEqual(`from ${cost}`);
  });
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  it('should check all tags are rendered correctly', () => {
    const id = 'test';
    const tags = ['tag1', 'tag2', 'tag3'];
    const name = 'nameTest';
    const cost = '250';
    const days = 10;
    const image = 'test.jpg';
    const component = shallow(<TripSummary id={id} tags={tags} name={name} cost={cost} days={days} image={image}/>);
    expect(component.find('.tags span').at(0).text()).toEqual(tags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(tags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(tags[2]);
  });

});
