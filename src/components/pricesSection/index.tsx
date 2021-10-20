import { Button } from "../button";
import s from "./index.module.css";
import img1 from "./grown.png";
import img2 from "./children.png";
import img3 from "./together.png";
import { useEffect, useState } from "react";
import { getPrices } from "helpers";

const imgsMap = {
  img1,
  img2,
  img3,
};

export const Prices = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const ff = async () => {
      const { prices } = await getPrices();
      setContent(prices);
    };

    ff();
  }, []);

  return (
    <section id='price' className={[s.main, "fluid"].join(" ")}>
      <div className={s.inner}>
        <h2>Цены и Акции</h2>
        <div className={s.items}>
          {content.map(({ id, imgs, text, price }: any) => (
            <div className={s.item} key={id}>
              {/* @ts-ignore */}
              <img src={imgsMap[imgs.text]} alt='' />
              <p className={s.price}>{price}&nbsp;тенге</p>
              <p className={s.text}>{text.text}</p>
            </div>
          ))}
        </div>
        <div className={s.blocks}>
          {blocks.map((block: string) => (
            <div className={s.block} dangerouslySetInnerHTML={{ __html: block }} />
          ))}
        </div>
        <div className={s.buttons}>
          <a href='tel:+7 (771) 01 999 79'>
            <Button name='Получить консультацию' size='large' variant='secondary' />
          </a>
          <a href='#tickets'>
            <Button name='Купить билеты' size='large' variant='primary'></Button>
          </a>
        </div>
      </div>
    </section>
  );
};

const blocks = [
  "Сопровождающие<br/>взрослые приобретают билеты <strong>отдельно</strong>",
  "В особые дни для детей с инвалидностью <br/><strong>бесплатный вход</strong>",
  "<strong>20% скидка</strong><br/> при предъявлении свидетельства о многодетности",
  "Детям <strong>до 6 лет</strong><br/> требуется сопровождение взрослого",
];
