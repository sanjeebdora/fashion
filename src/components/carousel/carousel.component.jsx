import { Component } from 'react';
import './carousel.styles.scss';
import { Link, useNavigate } from 'react-router-dom';

class Carousel extends Component {
  onSearchChange = () => {
    const navigate = useNavigate();
    navigate('/shop');
  };
  render() {
    return (
      <section class="relative bg-[url('https://i.ibb.co/P4V6Phf/derick-anies-h-DJT-ERr-B-w-unsplash.jpg')] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Your Fashion
              <strong class=" font-extrabold text-rose-700">
                {' '}
                Has a new address.
              </strong>
            </h1>

            <div class="mt-8 flex flex-wrap gap-4 text-center justify-center">
              <Link
                href="#"
                to="/shop"
                class="block w-full rounded bg-black px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Carousel;
