import { h } from 'preact';
import { forwardRef, RefObject } from 'preact/compat';

import { HEADER_HEIGHT_PX } from '$/constants/ui';
import { px2rem } from '$/utils/px2rem';

import { AsideProps } from './types';

export const Aside = forwardRef(
  ({ children, open }: AsideProps, ref): h.JSX.Element => (
    <aside
      ref={ref as RefObject<HTMLElement>}
      class={`left-0 w-64 md:w-96 bg-white fixed h-full overflow-auto ease-in-out duration-300 z-10 pb-40 ${
        open === true ? 'translate-x-0 shadow transition-all' : '-translate-x-full'
      }`}
      role="navigation"
      style={{ top: px2rem(HEADER_HEIGHT_PX) }}>
      {children}
    </aside>
  )
);
