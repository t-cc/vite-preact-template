import { MutableRef } from 'preact/hooks';

export interface clickOutsideArguments {
  ref: MutableRef<HTMLElement | undefined>;
  onClickOutside: () => void;
}
