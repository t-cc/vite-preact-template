import { render, screen } from '@testing-library/preact';
import { h } from 'preact';
import { describe, expect, test } from 'vitest';

import { Home } from './index';

describe('Home', () => {
  test('should render', () => {
    render(<Home />);
    expect(screen.getByRole('main')).toBeTruthy();
  });
});
