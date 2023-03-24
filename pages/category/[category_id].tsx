import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Categories, linkCategories } from '..';
import { Layout } from '../../components/layout/Layout';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';
import { NextPageWithLayout } from '../page';

const events = [
  {
    cover_img: '/1.png',
    title: 'Concierto de lady Gaga',
    description: 'El concierto con la temática de lady gaga en Las Vegas',
    url: 'ladygaga.com',
    votes: 90_800_756,
  },
  {
    cover_img: '/2.png',
    title: 'Tienda de ropa femenina ZARA',
    description: 'Tienda de ropa',
    url: 'zara.com',
    votes: 90_800_756,
  },
  {
    cover_img: '/3.png',
    title: 'Concierto de BTS',
    description: 'Grupo musical coreano',
    url: 'bts.com',
    votes: 90_800_756,
  },
];

export const CategoryPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { category_id } = router.query;
  const [selectedCategory, setSelectedCategory] = useState<Categories[]>([]);

  useEffect(() => {
    setSelectedCategory(
      linkCategories.filter((category) => category.id === category_id)
    );
  }, [category_id]);

  // console.log(selectedCategory);

  return (
    <div>
      <span>
        <Link href={'/'}>Home/</Link>
        {category_id}
      </span>

      <h1 className="text-2xl">
        {/* {' '}
        this page is{' '}
        <span className="text-app-red text-6xl">
        </span> */}
        {selectedCategory[0]?.name}
      </h1>
      <p>{selectedCategory[0]?.description}</p>

      <div>
        <ul>
          {linkCategories.map((category) => (
            <li key={category.id}>
              <Link href={`/category/${category.id}`}>
                <button>{category.name}</button>
              </Link>
            </li>
          ))}
        </ul>

        <input
          className="px-6 py-4 rounded-3xl w-full sm:w-[465px]"
          type="text"
          placeholder="¿Qué quieres ver en tu ciudad?"
        />
      </div>

      <EventSlider
        title="Populares en Colombia"
        subtitle="Lo que las personas piden más"
        events={events}
      />
    </div>
  );
};

CategoryPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;
