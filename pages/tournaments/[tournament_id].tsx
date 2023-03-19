import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';

const TournamentId = () => {
  const router = useRouter();
  const { tournament_id } = router.query;

  return <Layout> Routes {tournament_id} </Layout>;
};

export default TournamentId;
