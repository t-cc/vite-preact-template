import { h } from 'preact';
import { Link } from 'preact-router';
import { useState } from 'preact/compat';

import './index.css';
import { MenuItem, MenuProps } from './types';

export function Menu({ menu, toggleSidebar }: MenuProps): h.JSX.Element {
  const [selectedMenu, setSelectedMenu] = useState<string[]>([]);

  const buildRecursiveMenu = (
    { label, uri, items, prevIndex }: MenuItem & { prevIndex?: string },
    idx: number
  ): h.JSX.Element => {
    if (items?.length != null) {
      const currentIndex = `${prevIndex ?? ''}#${idx}`;
      return (
        <li
          class={`menu__item block ${
            selectedMenu?.includes(currentIndex) ? 'menu__item--open' : 'menu__item--closed'
          }`}>
          <a
            href="#"
            class="block p-4 no-underline font-bold text-vite-blue border-b border-gray-200
            hover:bg-gray-100 active:bg-vite-violet active:text-vite-yellow transition-colors md:text-xl"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setSelectedMenu((prevState) =>
                prevState.includes(currentIndex)
                  ? prevState.filter((item) => !item.startsWith(currentIndex))
                  : [currentIndex, ...prevState]
              );
            }}>
            {label}
          </a>
          <ul class="menu--sub pl-8 text-sm md:text-lg">
            {items.map((props, idx) =>
              buildRecursiveMenu({ ...props, prevIndex: currentIndex }, idx)
            )}
          </ul>
        </li>
      );
    }

    if (uri?.startsWith('http') === true) {
      return (
        <li class="menu__item block">
          <a
            href={uri}
            class="block p-4 no-underline font-bold text-vite-blue border-b border-gray-200
            hover:bg-gray-100 active:bg-vite-violet active:text-vite-yellow transition-colors md:text-xl"
            target="_blank"
            rel="noreferrer">
            {label}
          </a>
        </li>
      );
    }
    return (
      <li class="menu__item block">
        <Link
          href={uri}
          class="block p-4 no-underline font-bold text-vite-blue border-b border-gray-2000
          hover:bg-gray-100 active:bg-vite-violet active:text-vite-yellow transition-colors md:text-xl"
          onClick={() => toggleSidebar?.()}>
          {label}
        </Link>
      </li>
    );
  };

  return <ul class="border-t border-t-gray-200">{menu.map(buildRecursiveMenu)}</ul>;
}
