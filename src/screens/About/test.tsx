import { render, screen } from '@testing-library/preact';
import { h } from 'preact';
import { describe, expect, test } from 'vitest';

import { About } from '.';

const mock = {};

describe('About', () => {
  test('should render', () => {
    render(<About {...mock} />);
    expect(screen.getByRole('main')).toBeTruthy();
  });
});
