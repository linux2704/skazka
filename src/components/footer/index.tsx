import { SharedHeader } from "../header";
import s from "./index.module.css";

export const Footer = () => {
  return (
    <footer>
      <SharedHeader color='#fff' />
      <div className={s.below}>
        <div className={s.left}>
          ТОО "КИДБУРГ НУР-СУЛТАН"
          <br />
          <a href='/assets/skazkindom-rules.pdf' download>
            Договор офферты
          </a>
        </div>
        <div className={s.right}>
          <div className={s.address}>
            <p>Адрес: Нур-Султан, ул. Сыганак 16/5</p>
            <a href='mailto:main@kidburg.kz'>Email: main@kidburg.kz</a>
          </div>
          <div className={s.tel}>
            <a href='tel:+77710199979'>+7 (771) 01 999 79</a>
            <a href='tel:+7 (701) 04 999 79'>+7 (701) 04 999 79</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
