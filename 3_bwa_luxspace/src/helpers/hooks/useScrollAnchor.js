import { useLayoutEffect } from 'react';

export default function useScrollAnchor() {
  useLayoutEffect(() => {
    const smoothScrollAnchor = document.querySelectorAll("a[href^='#']");

    for (let index = 0; index < smoothScrollAnchor.length; index++) {
      const element = smoothScrollAnchor[index];

      element.addEventListener('click', function (e) {
        e.preventDefault();
        if (
          document.getElementById(this.getAttribute('href').replace('#', ''))
        ) {
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
          });
        }
      });
    }

    return () => {};
  });
}
