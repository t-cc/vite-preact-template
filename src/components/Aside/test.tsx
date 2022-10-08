import { render, screen } from '@testing-library/preact';
import { h } from 'preact';
import { describe, expect, test } from 'vitest';

import { Aside } from '.';

describe('Aside', () => {
  test('should render', () => {
    render(
      <Aside>
        <div>child</div>
      </Aside>
    );
    expect(screen.getByRole('navigation')).toBeTruthy();
  });
});
