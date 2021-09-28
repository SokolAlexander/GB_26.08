import React from 'react';
import { render, screen } from '@testing-library/react';

import { SimpleText } from '../index';

describe('SimpleText', () => {
  it('matches snapshot', () => {
    const component = render(<SimpleText />);

    expect(component).toMatchSnapshot();
  });

  it("render Hello + name", () => {
    const name = 'Alex';
    const component = render(<SimpleText name={name} />);

    component.getByText(`HELLO, ${name}`);
  });
})