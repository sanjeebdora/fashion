import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://i.ibb.co/r4Cnr3c/fashion-2309519-1920.jpg',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/v4Z8D8Q/willow-hand-2019-ag.jpg',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/KLp62sN/lonely-814631-1920.jpeg',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://i.ibb.co/jDdPhJ7/classic-girl-with-hat-4k-fx.jpg',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl:
      'https://i.ibb.co/xJf7gPc/julian-alexander-1u5-Nx-JITm0-E-unsplash.jpg',
    route: 'shop/mens',
  },
];

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
