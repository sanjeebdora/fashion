import { Component } from 'react';
import './carousel.styles.scss';
class Carousel extends Component {
  render() {
    return (
      <section class="relative bg-[url('https://i.ibb.co/KLp62sN/lonely-814631-1920.jpeg')] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Your Fashion
              <strong class="block font-extrabold text-rose-700">
                Has a new address.
              </strong>
            </h1>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Carousel;
