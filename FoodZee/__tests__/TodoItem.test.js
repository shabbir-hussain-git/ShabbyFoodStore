import 'react-native';
import React from 'react';

import {it} from '@jest/globals';

// import renderer, {fireEvent, getByText} from 'react-test-renderer';
import TodoItem from '../components/TodoItem';

import {render, screen, fireEvent} from '@testing-library/react-native';
it('renders correctly', () => {
  const x = {
    todo: {
      todoText: 'Go To Gym',
    },
  };
  const t1 = jest.fn();
  const t2 = jest.fn();
  x.editTodoItem = t1;
  x.deleteTodoItem = t2;

  // const tree = renderer.create(<TodoItem {...x} />).toJSON();
  const tree = render(<TodoItem {...x} />);
  const btn1 = screen.getByTestId('btn1');
  const ans = screen.getByTestId('ans');
  fireEvent.press(btn1, {todo: {todoText: 'Hello'}});
  expect(ans.children[0]).toBe('No Hello');

  expect(tree).toMatchSnapshot();
});
