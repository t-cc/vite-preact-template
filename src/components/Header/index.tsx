import { h } from 'preact';

import { HEADER_HEIGHT_PX } from '$/constants/ui';
import { px2rem } from '$/utils/px2rem';

import { HeaderProps } from './types';

export function Header({ children }: HeaderProps): h.JSX.Element {
  return (
    <nav class="bg-white shadow-black drop-shadow-xl px-4 fixed z-20 left-0 right-0 top-0 ">
      <div class="flex flex-row items-center" style={{ height: px2rem(HEADER_HEIGHT_PX) }}>
        {children}
      </div>
    </nav>
  );
}
