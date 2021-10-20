import { Button } from "../button";
import s from "./index.module.css";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import annImg from "./ann.png";
import { useEffect, useState } from "react";
import { getShows, ShowProps } from "helpers";

const imgMap: any = {
  0: img1,
  1: img2,
  2: img3,
};

export const Shows = () => {
  const [shows, setShows] = useState<ShowProps[]>([]);

  const mainShow = shows.find(({ isMain }) => isMain);

  useEffect(() => {
    const ff = async () => {
      const { shows } = await getShows();
      setShows(shows);
    };

    ff();
  }, []);

  return (
    <>
      <section id='shows' className={s.shows}>
        <h2>Спектакли</h2>
        <div className={s.items}>
          {shows.map(({ id, whom, title, isMain, content, color }, index) => {
            if (isMain) {
              return null;
            }
            return (
              <div key={id} className={s.item}>
                <img src={imgMap[index]} alt='' />
                <div style={{ color: `#${color}` }} className={s.content}>
                  <h3>{title}</h3>
                  <p className={s.desc}>{whom}</p>
                  <p className={s.text}>{content}</p>
                  <a href='#tickets'>
                    <Button name='Купить билет' size='large' />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {mainShow ? (
        <section className={["fluid", s.ann].join(" ")}>
          <div className={s.inner}>
            <div className={s.left}>
              <h2>«{mainShow.title}»</h2>
              <p>{mainShow.content}</p>
              <a href='#tickets'>
                <Button name='Купить билет' size='large' />
              </a>
            </div>
            <div className={s.right}>
              <img src={annImg} alt='' />
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
