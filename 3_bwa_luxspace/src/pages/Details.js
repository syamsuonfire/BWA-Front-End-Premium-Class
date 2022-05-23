import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from 'parts/Header';
import Breadcrumb from 'components/Breadcrumb';
import ProductDetails from 'parts/Details/ProductDetails';
import Suggestion from 'parts/Details/Suggestion';
import Sitemap from 'parts/Sitemap';
import Footer from 'parts/Footer';
import PageErrorMessage from 'parts/PageErrorMessage';
import Document from 'parts/Document';

import useAsync from 'helpers/hooks/useAsync';
import fetchData from 'helpers/fetch';

function LoadingProductDetails() {
  return (
    <section className="container mx-auto md:px-4 xl:px-0">
      <div className="flex flex-wrap my-4 md:my-12">
        <div className="w-full md:hidden px-4">
          <div className="2xsm:w-auto 2xsm:h-12 w-80 h-16 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-40 h-4 mt-3 bg-gray-300 animate-pulse rounded-full"></div>
        </div>
        <div className="flex-1">
          <div className="slider md:justify-between">
            <div className="thumbnail">
              {Array(5)
                .fill()
                .map((__, index) => {
                  return (
                    <div className="px-4 relative card group" key={index}>
                      <div
                        className="rounded-xl bg-gray-300 animate-pulse mb-4"
                        style={{ height: 106, width: 106 }}
                      ></div>
                    </div>
                  );
                })}
            </div>
            <div className="preview">
              <div className="item rounded-lg h-full overflow-hidden">
                <div className="item bg-gray-300 animate-pulse rounded-lg h-full overflow-hidden"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 px-4 md:p-6">
          <div className="hidden md:block">
            <div className="w-80 h-16 lg:w-full lg:h-24 xl:w-80 xl:h-16 bg-gray-300 animate-pulse rounded-full"></div>
            <div className="w-40 h-4 lg:w-40 lg:h-6 xl:w-40 xl:h-4 mt-4 bg-gray-300 animate-pulse rounded-full"></div>
          </div>

          <div className="xsm:w-auto xsm:h-12 w-auto h-12 md:w-48 lg:w-48 lg:h-12 xl:w-44 xl:h-10 mt-4 bg-gray-300 animate-pulse rounded-full"></div>

          <hr className="my-8" />

          <div className="xsm:w-36 w-36 h-4 lg:w-36 lg:h-5 xl:w-36 xl:h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="xsm:w-60 w-88 h-4 lg:w-56 lg:h-5 xl:w-88 xl:h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="xsm:w-32 w-40 h-4 lg:w-44 lg:h-5 xl:w-40 xl:h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="xsm:w-64 w-96 h-4 lg:w-60 lg:h-5 xl:w-96 xl:h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="xsm:w-48 w-64 h-4 lg:w-48 lg:h-5 xl:w-64 xl:h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="xsm:w-60 w-88 h-4 lg:w-60 lg:h-5 xl:w-88 xl:h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

function LoadingSuggestion() {
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
          {Array(4)
            .fill()
            .map((__, index) => {
              return (
                <div
                  className="px-3 w-full md:w-6/12 lg:w-3/12 mb-4"
                  key={index}
                >
                  <div className="rounded-xl p-4 pb-8 relative bg-white">
                    <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                      <div className="bg-gray-300 animate-pulse rounded-lg overflow-hidden w-full h-48"></div>
                    </div>
                    <div className="w-56 h-4 md:w-48 mt-4 bg-gray-300 animate-pulse rounded-full"></div>
                    <div className="w-40 h-4 md:w-36 mt-3 bg-gray-300 animate-pulse rounded-full"></div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default function Details() {
  const { idp } = useParams();

  const { data, error, run, isLoading, isError } = useAsync();

  useEffect(() => {
    run(
      fetchData({
        url: `/api/products/${idp}`,
      }),
    );
  }, [run, idp]);

  return (
    <Document>
      <Header theme="white" />

      <Breadcrumb
        list={[
          { url: '/', name: 'Home' },
          { url: '/categories/123123', name: 'Office Room' },
          { url: '/categories/123123/products/321', name: 'Details' },
        ]}
      />

      {isError ? (
        <PageErrorMessage
          title="Product Not Found"
          body={error.errors.message}
        />
      ) : (
        <>
          {isLoading ? (
            <LoadingProductDetails />
          ) : (
            <ProductDetails data={data} />
          )}

          {isLoading ? (
            <LoadingSuggestion />
          ) : (
            <Suggestion data={data?.relatedProducts || {}} />
          )}
        </>
      )}

      <Sitemap />
      <Footer />
    </Document>
  );
}
