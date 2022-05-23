import React from 'react';

import { Link } from 'react-router-dom';

import 'helpers/format/thousand';

export default function Suggestion({ data }) {
  return (
    <section className="bg-gray-100 px-4 py-16">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semi-bold">
            complte your room <br className="" />
            with what we designed
          </h3>
        </div>
        <div className="flex flex-wrap overflow-x-auto mb-4 -mx-3">
          {data?.map((item) => {
            return (
              <div
                className="px-3 w-full md:w-6/12 lg:w-3/12 mb-4"
                key={item.id}
              >
                <div className="rounded-xl p-4 pb-8 relative bg-white">
                  <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                    <img
                      src={item.imageUrl}
                      alt="chair office 1"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h5 className="text-lg font-semibold mt-4">{item.title}</h5>
                  <span className="">{item.price.currency()}</span>
                  <Link
                    to={`/categories/${item.idc}/products/${item.id}`}
                    className="stretched-link"
                  >
                    {/* <!-- fake children --> */}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
