import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';
import Carousel from '../../components/carousel/carousel.component';
import Footer from '../../components/footer/footer.component';

const Home = () => {
  // Data for carousel

  return (
    <div>
      <div className="carousel-container">
        <Carousel />
      </div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
