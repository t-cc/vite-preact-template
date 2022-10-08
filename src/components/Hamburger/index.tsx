import { h } from 'preact';

import { HamburgerProps } from './types';

export function Hamburger({ open, onClick }: HamburgerProps): h.JSX.Element {
  return (
    <button class="flex items-center space-x-2 focus:outline-none h-10 w-8" onClick={onClick}>
      <span class="w-full flex items-center justify-center relative">
        <span
          class={`transform transition w-full h-0.5 bg-black absolute ${
            open === true ? 'translate-y-0 rotate-45' : '-translate-y-2'
          }`}
        />
        <span
          class={`transform transition w-full h-0.5 bg-black absolute ${
            open === true ? 'opacity-0 translate-x-3' : 'opacity-100'
          }`}
        />
        <span
          class={`transform transition w-full h-0.5 bg-black absolute ${
            open === true ? 'translate-y-0 -rotate-45' : 'translate-y-2'
          }`}
        />
      </span>
    </button>
  );
}
