import { FC } from "react";
import Link from "next/link";
import style from "./Hero.module.css";
import { Container } from '@components/ui';

interface Props {
  headline: string;
  description: string;
}

const Hero: FC<Props> = ({ headline, description }) => {
  return (
    <div className="bg-black">
      <Container>
        <div className={style.root}>
          <h2 className={style.headline}>{headline}</h2>
          <div className="flex-1 max-w-4xl">
            <p className={style.description}>{description}</p>
            <Link href="#">
              <a className={style.link}>Read it here</a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
