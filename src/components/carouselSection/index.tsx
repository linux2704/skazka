import { useCallback, useState } from "react";
import s from "./index.module.css";

function importAll(r: any) {
  return r.keys().map(r);
}

//@ts-ignore
const images: any[] = importAll(require.context("./", false, /\.(png|jpe?g|svg)$/))
  .map((r: any, index: any) => ({
    id: index,
    image: r.default,
  }))
  .splice(0, 5);

const Carousel = () => {
  const [order, setOrder] = useState(0);
  const mock = [...videos, ...images];
  const width = window.innerWidth;
  const c = order * (width > 666 ? 752 : width);

  const getMedia = useCallback((media: any) => {
    if (media.hasOwnProperty("video")) {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${media.video}`}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded youtube'
        />
      );
    }

    return <img src={media.image} alt='skazkin dom slide' />;
  }, []);

  return (
    <section id='carousel' className={s.root}>
      <div className={s.inner}>
        <div className={s.images}>
          <div style={{ transform: `translateX(-${c}px)` }}>{mock.map(getMedia)}</div>
        </div>
        <div className={s.right}>
          <h2>Медиа</h2>
          <p>Окунитесь в мир Сказкиного Дома</p>
          <div className={s.controls}>
            <div className={s.dots}>
              {mock.map((_, index) => {
                if (index === order) {
                  return activeIcon;
                }
                return (
                  <div key={index} onClick={() => setOrder(index)}>
                    {notActiveIcon}
                  </div>
                );
              })}
            </div>
            <div className={s.arrows}>
              <div onClick={() => order >= 1 && setOrder(order - 1)}>
                {order >= 1 ? <span className={s.rotate}>{arrowRight}</span> : arrowLeft}
              </div>
              <div onClick={() => order < images.length && setOrder(order + 1)}>
                {order < images.length ? arrowRight : <span className={s.rotate}>{arrowLeft}</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Carousel };

const videos = [{ id: 0, video: "YjV0rtP8png" }];

const activeIcon = (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='12' cy='12' r='12' fill='#CADCED' />
    <circle cx='12' cy='12' r='9' fill='white' />
  </svg>
);

const notActiveIcon = (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='12' cy='12' r='12' fill='#CADCED' />
  </svg>
);

const arrowLeft = (
  <svg width='13' height='21' viewBox='0 0 13 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M1.54238 11.6276C1.53921 11.6244 1.53604 11.6212 1.53288 11.618C0.686306 10.7569 0.686308 9.36092 1.53289 8.49989L9.19722 0.704733C10.0438 -0.156297 11.4164 -0.156298 12.263 0.704732C13.1095 1.56576 13.1095 2.96177 12.263 3.8228L6.13151 10.0589L12.263 16.2951C13.1096 17.1561 13.1096 18.5521 12.263 19.4131C11.4164 20.2742 10.0439 20.2742 9.19728 19.4131L1.54238 11.6276Z'
      fill='#CADCED'
    />
  </svg>
);

const arrowRight = (
  <svg width='13' height='21' viewBox='0 0 13 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M7.77344 10.0071L1.635 3.76384C0.788417 2.90281 0.788415 1.5068 1.63499 0.645772C2.48157 -0.215258 3.85415 -0.215257 4.70073 0.645773L12.3651 8.44093C13.1967 9.28677 13.2114 10.6489 12.4091 11.5129C12.3636 11.5695 12.3148 11.6243 12.263 11.677L4.59862 19.4722C3.75204 20.3332 2.37946 20.3332 1.53288 19.4722C0.686304 18.6112 0.686305 17.2152 1.53288 16.3541L7.77344 10.0071Z'
      fill='#62ADF2'
    />
  </svg>
);
