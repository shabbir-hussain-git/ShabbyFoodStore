import 'react-native';
import React from 'react';

import {it} from '@jest/globals';

import renderer from 'react-test-renderer';
import Calci from '../components/Calci';

it('renders correctly', () => {
  const tree = renderer.create(<Calci data={'Shabbir'} />).toJSON();
  expect(tree).toMatchSnapshot();
  //   console.log(tree.children);
  expect(tree.children.length).toBe(2);
});
