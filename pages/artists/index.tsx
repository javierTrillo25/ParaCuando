import Link from 'next/link';
import { Layout } from '../../components/layout/Layout';

const artists = [
  {
    artistId: 1,
  },
  {
    artistId: 2,
  },
  {
    artistId: 3,
  },
  {
    artistId: 4,
  },
  {
    artistId: 5,
  },
];

export default function Index() {
  return (
    <Layout>
      <h1>Routes Artist</h1>
      <div>
        {artists.map((artist) => (
          <p key={artist.artistId}>
            <Link href={`/artists/${artist.artistId}`}>
              {' '}
              Artist: {artist.artistId}
            </Link>
          </p>
        ))}
      </div>
    </Layout>
  );
}
