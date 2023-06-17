import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://i.ibb.co/fkHm1RY/fashion-2309519-1920.webp',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl:
      'https://i.ibb.co/hRJS9zB/the-nix-company-4-Hmj9gky-M6c-unsplash.jpg',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/rphXBbT/lonely-814631-1920.webp',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://i.ibb.co/2djDmN3/freestocks-3-Q3ts-J01nc-unsplash.webp',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl:
      'https://i.ibb.co/dJ73k6R/julian-alexander-1u5-Nx-JITm0-E-unsplash.webp',
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
