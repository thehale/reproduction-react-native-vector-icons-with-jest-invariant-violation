/**
 * @format
 */

import 'react-native';

import App, { Icon } from '../App';
// Note: import explicitly to use the types shipped with jest.
import {expect, it} from '@jest/globals';

import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('renders icons correctly', () => {
  let tree = renderer.create(<Icon />).toJSON();
  expect(tree).toMatchSnapshot();
})