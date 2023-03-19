import Link from 'next/link';
import { Layout } from '../../components/layout/Layout';

const brands = [
  {
    brandId: 1,
  },
  {
    brandId: 2,
  },
  {
    brandId: 3,
  },
  {
    brandId: 4,
  },
  {
    brandId: 5,
  },
];

export default function Index() {
  return (
    <Layout>
      <h1>Hola soy la ruta marcas</h1>
      <div>
        {brands.map((brand) => (
          <p key={brand.brandId}>
            <Link href={`/brands/${brand.brandId}`}>
              {' '}
              Marca: {brand.brandId}
            </Link>
          </p>
        ))}
      </div>
    </Layout>
  );
}
