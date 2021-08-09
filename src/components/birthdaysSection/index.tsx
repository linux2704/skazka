import { Button } from "../button";
import s from "./index.module.css";
import img2 from "./bday2.png";
import img from "./bday.png";

export const Birthdays = () => {
  return (
    <>
      <section id='birthdays' className={s.bdays}>
        <div className={s.head}>
          <h2>Дни рождения</h2>
          <Button name='Получить консультацию' size='large' />
        </div>
      </section>
      <section className={[s.main, "fluid"].join(" ")}>
        <div className={s.grid}>
          <div className={s.inner}>
            <h3>«Волшебный День Рождения»</h3>
            <p className={s.desc}>- программа празднования Дня Рождения, для детей от 2 – 5 лет.</p>
            <p className={s.text}>
              Для именинника и его гостей готов подарок - волшебный торт! Зайка и Кошка поведут ребят по сказочной
              дорожке прямиком за праздничным тортом. Ребята найдут новых друзей, а именинник получит поздравления,
              сказочные пожелания и подарки! Домашняя Мышка устроит салют, Веселая Кошка поиграет с ребятами в
              догонялки, рыбки покажут и научат веселиться и плавать в волнах! Для именинника и его гостей мы устроим
              веселый и волшебный праздник в «Сказкином Доме»!
            </p>
          </div>
          <img src={img} alt='' />
        </div>
      </section>
      <section className={[s.main2, "fluid"].join(" ")}>
        <div className={s.grid2}>
          <div className={s.inner}>
            <h3>«Школа Бабы Яги»</h3>
            <p className={s.desc}>- программа празднования Дня Рождения для детей от 5 – 12 лет.</p>
            <p className={s.text}>
              Только Баба Яга может устроить незабываемый праздник с шутками и баловством! Баба Яга поздравит именинника
              и его гостей, познакомит с такими жителями сказки, с которыми невозможно встретится в обычный день! Кащей
              Бессмертный, Бабайка, Домовой и Водяной, появятся на празднике и порадуют ребят! Баба Яга обучит гостей
              веселым премудростям и хитростям, расскажет сказки и страшилки, заведет веселые пляски в честь именинника
              и его гостей
            </p>
          </div>
          <img src={img2} alt='' />
        </div>
      </section>
      <Button className={s.mobileBtn} name='Получить консультацию' size='large' />
    </>
  );
};
