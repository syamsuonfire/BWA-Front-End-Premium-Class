import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import useAsync from 'helpers/hooks/useAsync';
import fetch from 'helpers/fetch';

import 'helpers/format/thousand';

function Loading({ ratio = {} }) {
  const dummy = [
    {
      id: 1,
      ratio: {
        default: '1/9',
        md: '1/4',
      },
    },
    {
      id: 2,
      ratio: {
        default: '1/9',
        md: '2/2',
      },
    },
    {
      id: 3,
      ratio: {
        default: '1/9',
        md: '2/3',
      },
    },
    {
      id: 4,
      ratio: {
        default: '1/9',
        md: '1/4',
      },
    },
  ];

  return dummy.map((item, index) => {
    return (
      <div
        key={item.id}
        className={`relative card ${
          ratio?.wrapper.default?.[item.ratio.default]
        } ${ratio?.wrapper.md?.[item.ratio.md]}`}
        style={{ height: index === 0 ? 180 : 'auto' }}
      >
        <div className="bg-gray-300 rounded-lg w-full h-full">
          <div className={`overlay ${ratio?.meta?.[item.ratio.md]}`}>
            <div className="w-28 h-3 bg-gray-400 mt-2 rounded-full"></div>
            <div className="w-24 h-3 bg-gray-400 mt-3 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  });
}

export default function BrowseRoom() {
  const { data, run, isLoading } = useAsync();

  useEffect(() => {
    run(
      fetch({
        url: '/api/categories/?page=1&limit=4',
      }),
    );
  }, [run]);

  const ratioClassNames = {
    wrapper: {
      default: {
        '1/9': 'col-span-9 row-span-1',
      },
      md: {
        '1/4': 'md:col-span-4 md:row-span-1',
        '2/2': 'md:col-span-2 md:row-span-2',
        '2/3': 'md:col-span-3 md:row-span-2',
      },
    },
    meta: {
      '1/9':
        'left-0 top-0 bottom-0 flex justify-center flex-col 2xsm:pl-40 pl-48 md:pl-70 lg:pl-72',
      '1/4':
        'left-0 top-0 bottom-0 flex justify-center flex-col 2xsm:pl-40 pl-48 md:pl-70 lg:pl-72',
      '2/2':
        'inset-0 md:bottom-auto flex justify-center md:items-center flex-col 2xsm:pl-40 pl-48 md:pl-0 pt-0 md:pt-12',
      '2/3':
        'inset-0 md:bottom-auto flex justify-center md:items-center flex-col 2xsm:pl-40 pl-48 md:pl-0 pt-0 md:pt-12',
    },
  };

  return (
    <section className="flex bg-gray-100 py-16 px-4" id="browse-the-room">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            browse the room <br className="" />
            that we desgined for you
          </h3>
        </div>

        <div className="grid grid-rows-2 grid-cols-9 gap-4">
          {isLoading ? (
            <Loading ratio={ratioClassNames} />
          ) : (
            data.data.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`relative card ${
                    ratioClassNames?.wrapper.default?.[item.ratio.default]
                  } ${ratioClassNames?.wrapper.md?.[item.ratio.md]}`}
                  style={{ height: index === 0 ? 180 : 'auto' }}
                >
                  <div className="card-shadow rounded-xl">
                    <img
                      src={`/images/content/${item.imageUrl}`}
                      alt={item.title}
                      className="w-full h-full object-cover overlay overflow-hidden rounded-xl"
                    />
                  </div>
                  <div
                    className={`overlay ${
                      ratioClassNames?.meta?.[item.ratio.md]
                    }`}
                  >
                    <h5 className="text-lg font-semibold">{item.title}</h5>
                    <span className="">
                      {item.products.thousand()} item
                      {item.products > 1 ? 's' : ''}
                    </span>
                  </div>
                  <Link
                    to={`/categories/${item.id}/products/${item.id}`}
                    className="stretched-link"
                  >
                    {/* <!-- fake children --> */}
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
