import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

const CreatePost: NextPageWithLayout = () => {
  return <h1>Publications</h1>;
};

export default CreatePost;

CreatePost.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
