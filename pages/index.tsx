import Link from 'next/link';
import Logo from '../components/assets/logo/Logo';
import { Layout } from '../components/layout/Layout';
import { useCategories } from '../lib/services/categories.services';

import { NextPageWithLayout } from './page';

export interface Categories {
  id: string;
  name: string;
  description: string;
  cover?: string;
  url?: string;
}
export const linkCategories: Categories[] = [
  {
    id: 'brands',
    name: 'Marcas y tiendas',
    description: 'Descubre las marcas y tiendas que la gente quiere cerca',
  },
  {
    id: 'artists',
    name: 'Artistas y conciertos',
    description: 'Descubre los artistas y conciertos que la gente quiere cerca',
  },
  {
    id: 'tournaments',
    name: 'Torneos',
    description: 'Descubre los torneos y eventos que la gente quiere cerca',
  },
];

const Home: NextPageWithLayout = () => {
  const { data, error, isLoading } = useCategories();

  console.log({ data, error, isLoading });

  return (
    <div>
      {/* HERO SECTION */}
      <div className='min-h-[488px] flex justify-center items-center flex-col bg-[url("/hero-banner.png")] bg-cover bg-center app-banner -mt-4 gap-5'>
        <div>
          <Logo />
        </div>
        <div className="flex flex-col gap-4">
          <input
            className="px-6 py-4 rounded-3xl w-full sm:w-[465px]"
            type="text"
            placeholder="¿Qué quieres ver en tu ciudad?"
          />
          <div className="flex items-center justify-center gap-4">
            <Link href={'/category/marcas-y-tiendas'}>
              <button className="bg-white text-gray-400 py-2 px-4 rounded-3xl transition-transform duration-100 transform hover:scale-110">
                Marcas y tiendas
              </button>
            </Link>
            <Link href={'/category/artistas-y-conciertos'}>
              <button className="bg-white text-gray-400 py-2 px-4 rounded-3xl transition-transform duration-100 transform hover:scale-110">
                Artistas y conciertos
              </button>
            </Link>
            <Link href={'/category/torneos'}>
              <button className="bg-white text-gray-400 py-2 px-4 rounded-3xl transition-transform duration-100 transform hover:scale-110">
                Torneos
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* CONTENIDO */}
      <div className="bg-red-300 h-[70vh]">CONTENIDO</div>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
