import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { AccentText } from './components/ui/AccentText/AccentText';

let container: any = null;

beforeEach(() => {
  // Setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // Cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with or without a name', () => {
  act(() => {
    render(<AccentText>Text</AccentText>, container);
  });
  expect(container.textContent).toBe('Text');
});
