import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Button } from '..';

describe('Button', () => {
  it.todo('matches snapshot');

  it('calls when clicked', () => {
    const handleClick = jest.fn();
    const component = render(<Button onClick={handleClick}><span>Hello Button</span></Button>);

    const clickable = component.getByRole('button');
    fireEvent(clickable, new MouseEvent('click', { bubbles: true }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
