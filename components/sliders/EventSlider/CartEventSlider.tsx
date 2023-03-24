import Image from 'next/image';
import { FC } from 'react';

interface PropsComponent {
  cover_img: string;
  title: string;
  description: string;
  url: string;
  votes: number;
}

export const CardEventSlider: FC<PropsComponent> = ({
  cover_img,
  title,
  description,
  url,
  votes,
}) => {
  return (
    <div>
      <div>
        <Image
          src={cover_img}
          width={250}
          height={250}
          alt={`Portada de evento`}
        ></Image>
      </div>
      <div>
        <h3> {title} </h3>
        <p>{description}</p>
      </div>
      <div>
        <ul>
          <li>
            <a href={url}>{url}</a>
          </li>
          <li>
            <i className="bx bx-user"></i>
            <span>{votes} Votes</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
