import { Component } from 'react';
import './carousel.styles.scss';
import { Link, useNavigate } from 'react-router-dom';

const Carousel = () => {
  //render() {
  return (
    <section className="relative bg-[url('https://i.ibb.co/8dQY5bH/jasper-garratt-im0-GJGz-NT5-Y-unsplash-1.webp')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0  sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Your Fashion
            <strong className=" font-extrabold text-rose-700">
              {' '}
              Has a new address.
            </strong>
          </h1>

          <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
            <Link
              href="#"
              to="/shop"
              className="block w-full rounded bg-black px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
  //}
};

export default Carousel;
