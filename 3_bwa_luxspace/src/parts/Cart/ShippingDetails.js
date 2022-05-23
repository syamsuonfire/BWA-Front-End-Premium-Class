import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import useAsync from 'helpers/hooks/useAsync';
import useForm from 'helpers/hooks/useForm';
import fetchData from 'helpers/fetch';
import { useGlobalContext } from 'helpers/hooks/useGlobalContext';

export default function ShippingDetails() {
  const history = useHistory();
  const { data, run, isLoading } = useAsync();
  const { state, dispatch } = useGlobalContext();

  const { state: payload, fnUpdateState } = useForm({
    completeName: '',
    emailAddress: '',
    address: '',
    phoneNumber: '',
    courier: '',
    payment: '',
  });

  console.log(payload);

  const isSubmitDisabled =
    Object.keys(payload).filter((key) => {
      return payload[key] !== '';
    }).length === Object.keys(payload).length;

  useEffect(() => {
    run(
      fetchData({
        url: `/api/checkout/meta`,
      }),
    );
  }, [run]);

  async function fnSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetchData({
        url: `/api/checkout`,
        method: 'POST',
        body: JSON.stringify({
          ...payload,
          cart: Object.keys(state.cart).map((key) => state.cart[key]),
        }),
      });
      console.log(res);
      if (res) {
        history.push('/congratulation');
        dispatch({
          type: 'RESET_CART',
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full md:px-4 lg:w-4/12" id="shipping-detail">
      <div className="bg-gray-100 px-4 py-6 md:p-8 md:rounded-3xl">
        <form onSubmit={fnSubmit}>
          <div className="flex flex-start mb-6">
            <h3 className="text-2xl">Shipping Details</h3>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="completeName" className="text-sm mb-2">
              Complete Name
            </label>
            <input
              onChange={fnUpdateState}
              value={payload.completeName}
              type="text"
              name="completeName"
              className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input your name"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="emailAddress" className="text-sm mb-2">
              Email Address
            </label>
            <input
              onChange={fnUpdateState}
              value={payload.emailAddress}
              type="email"
              name="emailAddress"
              className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input your email address"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="address" className="text-sm mb-2">
              Address
            </label>
            <input
              onChange={fnUpdateState}
              value={payload.address}
              type="text"
              name="address"
              className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input your address"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="phoneNumber" className="text-sm mb-2">
              Phone Number
            </label>
            <input
              onChange={fnUpdateState}
              value={payload.phoneNumber}
              type="tel"
              name="phoneNumber"
              className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input your phone number"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="courier" className="text-sm mb-2">
              Choose Courier
            </label>
            <div className="flex -mx-2 flex-wrap">
              {isLoading
                ? Array(2)
                    .fill()
                    .map((__, index) => {
                      return (
                        <div className="px-2 w-6/12 h-24 mb-4" key={index}>
                          <div className="bg-gray-300 w-full h-full animate-pulse rounded-lg mx-2"></div>
                        </div>
                      );
                    })
                : data?.couriers?.map((item) => {
                    return (
                      <div className="px-2 w-6/12 h-24 mb-4" key={item.id}>
                        <button
                          type="button"
                          onClick={() =>
                            fnUpdateState({
                              target: {
                                name: 'courier',
                                value: item.id,
                              },
                            })
                          }
                          className="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                        >
                          <img
                            src={item.imgUrl}
                            alt={item.name}
                            className="object-contain max-h-full"
                          />
                        </button>
                      </div>
                    );
                  })}
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="payment" className="text-sm mb-2">
              Choose Payment
            </label>
            <div className="flex -mx-2 flex-wrap">
              {isLoading
                ? Array(4)
                    .fill()
                    .map((__, index) => {
                      return (
                        <div className="px-2 w-6/12 h-24 mb-4" key={index}>
                          <div className="bg-gray-300 w-full h-full animate-pulse rounded-lg mx-2"></div>
                        </div>
                      );
                    })
                : data?.payments?.map((item) => {
                    return (
                      <div className="px-2 w-6/12 h-24 mb-4" key={item.id}>
                        <button
                          type="button"
                          onClick={() =>
                            fnUpdateState({
                              target: {
                                name: 'payment',
                                value: item.id,
                              },
                            })
                          }
                          className="border border-gray-200 focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full focus:outline-none"
                        >
                          <img
                            src={item.imgUrl}
                            alt={item.name}
                            className="object-contain max-h-full"
                          />
                        </button>
                      </div>
                    );
                  })}
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={!isSubmitDisabled}
              className="bg-pink-400 text-black hover:bg-black hover:text-pink-400 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-6"
            >
              Checkout Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
