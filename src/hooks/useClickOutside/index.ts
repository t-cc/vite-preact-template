import { useEffect } from 'preact/compat';

import { clickOutsideArguments } from './types';

export const useClickOutside = ({ ref, onClickOutside }: clickOutsideArguments): void => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(e: MouseEvent): void {
      if (ref?.current != null && e.target != null && !ref.current.contains(e.target as Node)) {
        onClickOutside();
      }
    }
    // Bind the event listener
    document.addEventListener('click', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClickOutside, ref]);
};
