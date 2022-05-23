import React, { useState } from 'react';

import { Link } from 'react-router-dom';

function SitemapLinks({ isActive, setActive, children, title }) {
  return (
    <div className="w-full md:w-2/12 mb-4 md:mb-0 accordion">
      <h5 className="text-xl font-semibold mb-2 relative">
        {title}
        <button
          onClick={() => setActive(isActive)}
          className={[
            'absolute block md:hidden right-0 transform -translate-y-1/2 focus:outline-none transition duration-200 top-1/2',
            isActive ? 'rotate-0' : 'rotate-180',
          ].join(' ')}
        >
          <svg
            width="20"
            height="9"
            viewBox="0 0 20 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L9.75 7.5L18.5 1"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </h5>
      <ul
        className={[
          'md:h-auto md:visible md:opacity-100 overflow-hidden transition duration-200',
          isActive ? 'h-0 invisible opacity-0' : 'opacity-100',
        ].join(' ')}
      >
        {children}
      </ul>
    </div>
  );
}

export default function Sitemap() {
  const [active, setActive] = useState(null);
  return (
    <section className="sitemap">
      <div className="border-b border-gray-200 py-12 mt-16 px-4">
        <div className="flex justify-center mb-8">
          <img
            src="/images/content/logo.png"
            alt="Luxspace - Adalah sebuah website yang menjual barang-barnag kece"
          />
        </div>
        <aside className="container mx-auto">
          <div className="flex flex-wrap md:space-x-4 justify-center">
            {/* <!-- Items aside menu Start 1 --> */}
            <SitemapLinks
              setActive={setActive}
              isActive={active === 1 ? null : 1}
              title="Overview"
            >
              <li>
                <Link to="/shipping" className="hover:underline py-1 block">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/refund" className="hover:underline py-1 block">
                  Refund
                </Link>
              </li>
              <li>
                <Link to="/promotion" className="hover:underline py-1 block">
                  Promotion
                </Link>
              </li>
            </SitemapLinks>
            {/* <!-- End Items aside menu 1 --> */}

            {/* <!-- Items aside menu Start 2 --> */}
            <SitemapLinks
              setActive={setActive}
              isActive={active === 2 ? null : 2}
              title="Company"
            >
              <li>
                <Link to="/about" className="hover:underline py-1 block">
                  About
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:underline py-1 block">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:underline py-1 block">
                  Contact Us
                </Link>
              </li>
            </SitemapLinks>
            {/* <!-- End Items aside menu 2 --> */}

            {/* <!-- Items aside menu Start 3 --> */}
            <SitemapLinks
              setActive={setActive}
              isActive={active === 3 ? null : 3}
              title="Explore"
            >
              <li>
                <Link to="/terms-conds" className="hover:underline py-1 block">
                  Terms & Conds
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:underline py-1 block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/for-developer"
                  className="hover:underline py-1 block"
                >
                  For Developer
                </Link>
              </li>
            </SitemapLinks>
            {/* <!-- End Items aside menu 3 --> */}

            {/* <!-- Items aside menu Start 4 --> */}
            <div className="w-full md:w-3/12 mb-4 md:mb-0">
              <h5 className="text-xl font-semibold mb-2 relative">
                Special Letter
              </h5>
              <form action="#">
                <label className="relative w-full">
                  <input
                    type="text"
                    className="bg-gray-100 rounded-xl py-3 px-5 md:px-2 md:text-sm lg:text-base w-full focus:outline-none"
                    placeholder="Your email address"
                  />
                  <button className="bg-pink-400 absolute rounded-xl right-0 p-3 text-white">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.6177 0.411971C23.6163 0.410624 23.6152 0.409187 23.6138 0.407839C23.6124 0.406492 23.6109 0.405414 23.6095 0.404157C23.236 0.049307 22.7002 -0.0573008 22.2098 0.126411L0.833871 8.13353C0.268743 8.34518 -0.0623361 8.87521 0.0098048 9.4523C0.0821332 10.0294 0.53462 10.4694 1.13589 10.547L11.5833 11.8968C11.6028 11.8994 11.6185 11.9143 11.6212 11.9332L13.0301 21.9417C13.1112 22.5177 13.5704 22.9512 14.1729 23.0204C14.2279 23.0268 14.2824 23.0298 14.3364 23.0298C14.8735 23.0298 15.3486 22.7229 15.5495 22.231L23.9077 1.75274C24.0994 1.28302 23.9882 0.76983 23.6177 0.411971ZM1.30534 9.34475C1.2819 9.34169 1.27136 9.34039 1.26728 9.30788C1.26325 9.27537 1.27319 9.27159 1.29508 9.26347L21.2946 1.77187L11.9404 10.7333C11.8794 10.7163 1.30534 9.34475 1.30534 9.34475ZM14.37 21.7892C14.3614 21.8102 14.358 21.8198 14.3236 21.8158C14.2897 21.8119 14.2883 21.8017 14.2852 21.7794C14.2852 21.7794 12.8535 11.6495 12.8358 11.5911L22.19 2.62972L14.37 21.7892Z" />
                    </svg>
                  </button>
                </label>
              </form>
            </div>
            {/* <!-- End Items aside menu 4 --> */}
          </div>
        </aside>
      </div>
    </section>
  );
}
