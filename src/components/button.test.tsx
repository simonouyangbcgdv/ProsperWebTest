import { act, fireEvent, render } from '@testing-library/react';
import React from 'react';
import Button from './button';

it('should render label', () => {
  const { getByRole } = render(<Button label="Click me" />);
  const uat = getByRole('button');
  expect(uat).toHaveTextContent('Click me');
});

it('should call onClick', () => {
  const onClick = jest.fn();
  const { getByRole } = render(<Button label="Click me" onClick={onClick} />);
  const uat = getByRole('button');
  act(() => {
    fireEvent.click(uat);
  });
  expect(onClick).toBeCalledTimes(1);
});
