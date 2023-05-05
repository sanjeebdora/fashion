import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';
import Carousel from '../../components/carousel/carousel.component';

const Home = () => {
  // Data for carousel
  const carouselSlidesData = [
    {
      imageUrl: 'https://i.ibb.co/KLp62sN/lonely-814631-1920.jpeg',
      author: 'JENES',
      source: 'Men',
    },
    {
      imageUrl: 'https://i.ibb.co/r4Cnr3c/fashion-2309519-1920.jpg',
      author: 'Hat',
      source: 'Summer Collection',
    },
    {
      imageUrl: 'https://i.ibb.co/230cm10/women.jpg',
      author: 'Hat',
      source: 'Summer Collection',
    },
    {
      imageUrl: 'https://i.ibb.co/tsdNf3J/5640-girl-paint-dark-portrait-4k.jpg',
      author: 'Hat',
      source: 'Summer Collection',
    },
    {
      imageUrl: 'https://i.ibb.co/2hnzQYL/johnny-silverhand-6f.jpg',
      author: 'Hat',
      source: 'Summer Collection',
    },
    {
      imageUrl: 'https://i.ibb.co/jDdPhJ7/classic-girl-with-hat-4k-fx.jpg',
      author: 'Hat',
      source: 'Night Collection',
    },
    {
      imageUrl: 'https://i.ibb.co/v4Z8D8Q/willow-hand-2019-ag.jpg',
      author: 'Jackets',
      source: 'Summer Collection',
    },
  ];

  return (
    <div>
      <div className="carousel-container">
        <Carousel slides={carouselSlidesData} />
      </div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
