import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';

const BrandId = () => {
  const router = useRouter();
  const { brand_id } = router.query;

  return <Layout> Brands Pages: {brand_id} </Layout>;
};

export default BrandId;
