import { Fragment, h } from 'preact';
import Router from 'preact-router';
import { useRef } from 'preact/compat';

import logo from '$/assets/vite.svg';
import { Aside } from '$/components/Aside';
import { Hamburger } from '$/components/Hamburger';
import { Header } from '$/components/Header';
import { Menu } from '$/components/Menu';
import { HEADER_HEIGHT_PX } from '$/constants/ui';
import { useClickOutside } from '$/hooks/useClickOutside';
import { About } from '$/screens/About';
import { Home } from '$/screens/Home';
import { STORE } from '$/store';
import { px2rem } from '$/utils/px2rem';

import './app.css';

// https://github.com/preactjs/preact-router/issues/319
const old = history.pushState;
history.pushState = function (...args) {
  old.apply(this, args);
  scrollTo(0, 0);
};

const menu = [
  {
    label: 'Home',
    uri: '/'
  },
  {
    label: 'About',
    uri: '/about'
  },
  {
    label: 'Links',
    items: [
      {
        label: 'Preact',
        uri: 'https://preactjs.com'
      }
    ]
  }
];

export function App(): h.JSX.Element {
  const asideRef = useRef<HTMLElement>();
  useClickOutside({
    ref: asideRef,
    onClickOutside: () => (STORE.menuOpen.value = false)
  });

  return (
    <Fragment>
      <div class="pb-24">
        <Header>
          <Hamburger
            open={STORE.menuOpen.value}
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
              STORE.menuToggle();
            }}
          />
          <img src={logo} class="h-12 ml-6 mr-4  " alt="logo" />
          <span class="text-2xl font-bold  md:hidden ">Preact+Vite</span>
          <h1 class="text-2xl hidden md:block font-display ">Preact Vite template</h1>
        </Header>

        <Aside open={STORE.menuOpen.value} ref={asideRef}>
          <Menu menu={menu} toggleSidebar={STORE.menuToggle} />
        </Aside>
        <div style={{ paddingTop: px2rem(HEADER_HEIGHT_PX) }}>
          <div class="container mx-auto my-6">
            <Router>
              <Home
                /*
              // @ts-expect-error */
                path="/"
                default
              />
              <About
                /*
              // @ts-expect-error */
                path="/about"
              />
            </Router>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
