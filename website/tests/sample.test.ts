import React from 'react'
import {render} from '@testing-library/react'
import Home from './../pages/index'

test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});

test('React component smoke test', () => {
    render(<Home />);
});