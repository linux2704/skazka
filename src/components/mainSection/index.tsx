import { Button } from "../button";
import s from "./index.module.css";
import mainImg from "./main.png";
export const MainSection = () => {
  return (
    <section id='main'>
      <div className={s.main}>
        <div className={s.left}>
          <h1>Добро пожаловать в Сказкин Дом!</h1>
          <p>
            «Сказкин Дом» — это место для искренней радости, здесь праздник ждет ребенка каждый день! И, как во время
            любого настоящего праздника, дети сталкиваются у нас с чудесами, знакомятся с добрыми героями и получают
            удивительные светлые эмоции.
          </p>
          <div className={s.buttons}>
            <a href='tel:+7 (771) 01 999 79'>
              <Button name='Получить консультацию' variant='secondary' size='large' />
            </a>
            <a href='#tickets'>
              <Button name='Купить билеты' variant='primary' size='large'></Button>
            </a>
          </div>
        </div>
        <img src={mainImg} alt='main' />
      </div>
    </section>
  );
};
