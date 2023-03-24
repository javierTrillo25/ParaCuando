import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

const Search: NextPageWithLayout = () => {
  return <h1>Search PageRoute</h1>;
};

export default Search;

Search.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
