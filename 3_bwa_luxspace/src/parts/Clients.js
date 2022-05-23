import React from 'react';

export default function Clients() {
  return (
    <section className="container mx-auto py-8">
      <div className="flex justify-center flex-wrap md:flex-nowrap">
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img
            src="images/content/logo-adobe.png"
            alt="logo adobe"
            className="mx-auto"
          />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img
            src="images/content/logo-ikea.png"
            alt="logo ikea"
            className="mx-auto"
          />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img
            src="images/content/logo-herman-miller.png"
            alt="logo herman miller"
            className="mx-auto"
          />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
          <img
            src="images/content/logo-miele.png"
            alt="logo miele"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
