import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { useGlobalContext } from 'helpers/hooks/useGlobalContext';

import { ReactComponent as IconCart } from 'assets/images/icon-cart.svg';

export default function Header({ theme, position }) {
  const [toggleMainMenu, setToggleMainMenu] = useState(false);
  const [isCartChange, setCartChange] = useState(false);
  const { state } = useGlobalContext();

  const prevCart = useRef(state?.cart || {});

  useLayoutEffect(() => {
    if (prevCart.current !== state.cart) {
      prevCart.current = state?.cart || {};
      setCartChange(true);
      setTimeout(() => {
        setCartChange(false);
      }, 500);
    }
  }, [state.cart]);

  return (
    <header className={[position, 'w-full z-40 px-4'].join(' ')}>
      <div className="container mx-auto py-10">
        <div className="flex flex-stretch items-center">
          <div className="w-56 flex items-center">
            <Link to="/">
              <img
                src="/images/content/logo.png"
                alt="Luxspace - Adalah sebuah website yang menjual barang-barnag kece"
              />
            </Link>
          </div>
          <div className="w-full"></div>

          {/* Menu Hamburger wraper start */}
          <div className="w-auto">
            <ul
              id="menu"
              className={[
                'fixed bg-white inset-0 flex flex-col items-center justify-center md:visible md:flex-row md:bg-transparent md:relative md:opacity-100 md:flex md:items-center',
                toggleMainMenu
                  ? 'opacity-100 z-30 visible'
                  : 'invisible opacity-0',
              ].join(' ')}
            >
              <li className="mx-3 py-6 md:py-0">
                <Link
                  to="/showcase"
                  className={[
                    'hover:underline',
                    theme === 'white'
                      ? 'text-black'
                      : 'text-black hover:text-white',
                  ].join(' ')}
                >
                  Showcase
                </Link>
              </li>
              <li className="mx-3 py-6 md:py-0">
                <Link
                  to="/catalog"
                  className={[
                    'hover:underline',
                    theme === 'white'
                      ? 'text-black'
                      : 'text-black hover:text-white',
                  ].join(' ')}
                >
                  Catalog
                </Link>
              </li>
              <li className="mx-3 py-6 md:py-0">
                <Link
                  to="/delivery"
                  className={[
                    'hover:underline',
                    theme === 'white'
                      ? 'text-black'
                      : 'text-black hover:text-white',
                  ].join(' ')}
                >
                  Delivery
                </Link>
              </li>
              <li className="mx-3 py-6 md:py-0">
                <Link
                  to="/rewards"
                  className={[
                    'hover:underline',
                    theme === 'white'
                      ? 'text-black'
                      : 'text-black hover:text-white',
                  ].join(' ')}
                >
                  Rewards
                </Link>
              </li>
            </ul>
          </div>
          {/* End Manu Hamburger wraper */}

          <div className="w-auto">
            <ul className="flex items-center">
              <li className="ml-6 block md:hidden">
                <button
                  className={[
                    'flex z-50 items-center justify-center w-8 h-8 text-black focus:outline-none',
                    toggleMainMenu ? 'fixed top-0 right-0' : 'relative',
                  ].join(' ')}
                  onClick={() => setToggleMainMenu((prev) => !prev)}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.9773 0.461304H1.04219C0.466585 0.461304 0 0.790267 0 1.19609C0 1.60192 0.466668 1.93088 1.04219 1.93088H15.9773C16.5529 1.93088 17.0195 1.60192 17.0195 1.19609C17.0195 0.790208 16.5529 0.461304 15.9773 0.461304Z" />
                    <path d="M15.9773 7.68802H1.04219C0.466585 7.68802 0 8.01698 0 8.42281C0 8.82864 0.466668 9.1576 1.04219 9.1576H15.9773C16.5529 9.1576 17.0195 8.82864 17.0195 8.42281C17.0195 8.01692 16.5529 7.68802 15.9773 7.68802Z" />
                    <path d="M15.9773 14.9147H1.04219C0.466585 14.9147 0 15.2437 0 15.6495C0 16.0553 0.466668 16.3843 1.04219 16.3843H15.9773C16.5529 16.3843 17.0195 16.0553 17.0195 15.6495C17.0195 15.2436 16.5529 14.9147 15.9773 14.9147Z" />
                  </svg>
                </button>
              </li>
              <li className="ml-6">
                <Link
                  to="/cart"
                  className={[
                    'cart flex items-center justify-center w-8 h-8',
                    theme === 'white'
                      ? 'text-black'
                      : 'text-black hover:text-white',
                    state.cart && Object.keys(state.cart).length > 0
                      ? 'cart-filled'
                      : '',
                    isCartChange ? 'animate-bounce' : '',
                  ].join(' ')}
                >
                  <IconCart />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
