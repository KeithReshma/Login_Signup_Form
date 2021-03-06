import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from './Dashboard';


configure({ adapter: new Adapter() });

describe('SpotPromotions', () => {
  const tree = shallow(<Dashboard />);

  it('should be defined', () => {
    expect(Dashboard).toBeDefined();
  });

  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });

//   it('should render Table Component', () => {
//     expect(tree.find('Tables').length).toBe(1);
//   });

//   it('should render Accordion component', () => {
//     expect(tree.find('Accordion').length).toBe(1);
//   });

//   it('should render Panel Group correctly', () => {
//     expect(tree.find('PanelGroup').length).toBe(1);
//   });

//   it('should render Dropdown component', () => {
//     expect(tree.find('Dropdown').length).toBe(1);
//   });
});
