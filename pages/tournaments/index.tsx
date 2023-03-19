import Link from 'next/link';
import { Layout } from '../../components/layout/Layout';

const tournaments = [
  {
    tournamentId: 1,
  },
  {
    tournamentId: 2,
  },
  {
    tournamentId: 3,
  },
  {
    tournamentId: 4,
  },
  {
    tournamentId: 5,
  },
];

export default function Index() {
  return (
    <Layout>
      <h1>Hola soy la ruta de eventos</h1>
      <div>
        {tournaments.map((tournament) => (
          <p key={tournament.tournamentId}>
            <Link href={`/tournaments/${tournament.tournamentId}`}>
              {' '}
              Evento: {tournament.tournamentId}
            </Link>
          </p>
        ))}
      </div>
    </Layout>
  );
}
