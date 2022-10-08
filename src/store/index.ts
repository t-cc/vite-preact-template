import { signal } from '@preact/signals';

const menuOpen = signal(false);

const menuToggle = () => (menuOpen.value = !menuOpen.peek());

export const STORE = {
  menuOpen,
  menuToggle
};
