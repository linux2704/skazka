import { Button } from "../button";
import s from "./index.module.css";
import img2 from "./bday2.png";
import img from "./bday.png";
import { useEffect, useState } from "react";
import { getBirthdays } from "helpers";

const imgMap: any = {
  0: img,
  1: img2,
};

export const Birthdays = () => {
  const [content, setContent] = useState([]);
  useEffect(() => {
    const ff = async () => {
      const { birthdays } = await getBirthdays();

      setContent(birthdays);
    };

    ff();
  }, []);
  return (
    <>
      <section id='birthdays' className={s.bdays}>
        <div className={s.head}>
          <h2>Дни рождения</h2>
          <a href='tel:+7 (771) 01 999 79'>
            <Button name='Получить консультацию' size='large' />
          </a>
        </div>
      </section>
      {content.map(({ title, description, body, id }, index) => (
        <section className={[s.main, "fluid"].join(" ")}>
          <div className={s.grid}>
            <div className={s.inner} key={id}>
              <h3>«{title}»</h3>
              <p className={s.desc}>{description}</p>
              <p className={s.text}>{body}</p>
            </div>

            <img src={imgMap[index]} alt='' />
          </div>
        </section>
      ))}

      <a href='tel:+7 (771) 01 999 79'>
        <Button className={s.mobileBtn} name='Получить консультацию' size='large' />
      </a>
    </>
  );
};
