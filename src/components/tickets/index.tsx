import { FormEvent, useCallback } from "react";
import { useState } from "react";
import { Button } from "../button";
import s from "./index.module.css";
import img from "./tickets.png";

export const Tickets = () => {
  const [spekt, setSpekt] = useState(0);

  const [cdate, setCdate] = useState(0);

  const [ctime, setCtime] = useState(0);

  const [price, setPrice] = useState(0);

  const [final, setFinal] = useState<any[]>([]);

  const [tCount, setTcount] = useState({ adult: 0, child: 0, both: 0 });
  //@ts-ignore
  const chosenSlot = time[cdate];

  const getSpektName = () => {
    const f = spektakl.find(({ id }) => id === spekt);
    return f?.title || "";
  };

  const getDate = () => {
    const f = dates.find(({ id }) => id === cdate);
    return f?.date || "";
  };
  const getTime = () => {
    const f = chosenSlot.find(({ id }: any) => id === ctime);
    return f?.slot || "";
  };

  const getTicketsMap = useCallback((newTCount) => {
    const { adult, child, both } = newTCount;
    const adultPrice = adult * 3500;
    const childPrice = child * 2500;
    const bothPrice = both * 6000;

    const adultTickets = adult ? `(${adult}x) Взрослый билет - ${adultPrice} тг.` : null;
    const childTickets = child ? `(${child}x) Детский билет - ${childPrice} тг.` : null;
    const bothTickets = both ? `(${both}x) Взрослый + Детский билеты - ${bothPrice} тг.` : null;

    setFinal([adultTickets, childTickets, bothTickets]);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Извините, оплата находится в разработке. К оплате ${price}`);
  };

  const lol = useCallback(
    (newCount) => {
      setTcount((p) => ({ ...p, ...newCount }));

      const n = { ...tCount, ...newCount };

      const { adult, child, both } = n;
      const adultPrice = adult * 3500;
      const childPrice = child * 2500;
      const bothPrice = both * 6000;

      setPrice(adultPrice + childPrice + bothPrice);
      getTicketsMap(n);
    },
    [tCount, setTcount, setPrice, getTicketsMap]
  );

  return (
    <section id='tickets' className={[s.tickets, "fluid"].join(" ")}>
      <div className={s.inner}>
        <h2>Покупка билетов</h2>
        <div className={s.form}>
          <form onSubmit={handleSubmit}>
            <div className={s.fieldset}>
              <h3>Выберите спектакль</h3>
              <div className={s.spektakl}>
                {spektakl.map(({ id, name, title }) => (
                  <label
                    key={id}
                    className={id === spekt ? s.active : ""}
                    onClick={() => {
                      setSpekt(id);
                      setCdate(0);
                      setCtime(0);
                    }}
                  >
                    <input hidden type='radio' name='spektakl' />
                    &nbsp;{title}
                  </label>
                ))}
              </div>
            </div>
            <div className={s.fieldset}>
              <h3>Выберите день и время</h3>
              <div className={s.dates}>
                <span>День недели:</span>
                {dates.map(({ id, name, title, date }) => {
                  if ((spekt === 0 && [0, 1, 2].includes(id)) || (spekt === 1 && [10, 11].includes(id))) {
                    return (
                      <label
                        key={id}
                        className={id === cdate ? s.active : ""}
                        onClick={() => {
                          setCdate(id);
                          setCtime(0);
                        }}
                      >
                        <input hidden type='radio' name='dates' />
                        &nbsp;{title}
                        <p>{date}</p>
                      </label>
                    );
                  }
                  if (![0, 1].includes(spekt)) {
                    return (
                      <label
                        key={id}
                        className={id === cdate ? s.active : ""}
                        onClick={() => {
                          setCdate(id);
                          setCtime(0);
                        }}
                      >
                        <input hidden type='radio' name='dates' />
                        &nbsp;{title}
                        <p>{date}</p>
                      </label>
                    );
                  }
                  return null;
                })}
              </div>
              <div className={s.time}>
                <span>Время:</span>
                {chosenSlot.map(({ id, slot }: any) => (
                  <label key={id} className={id === ctime ? s.active : ""} onClick={() => setCtime(id)}>
                    <input hidden type='radio' name='time' />
                    &nbsp;{slot}
                  </label>
                ))}
              </div>
            </div>
            <div className={s.fieldset}>
              <h3>Выберите количество билетов</h3>
              <div className={s.items}>
                <div className={s.item}>
                  <span>Взрослый билет</span>
                  <Counter name={"adult"} count={tCount.adult} setCount={lol} />
                </div>
                <div className={s.item}>
                  <span>Детский билет</span>
                  <Counter name={"child"} count={tCount.child} setCount={lol} />
                </div>
                <div className={s.item}>
                  <span>Взрослый + Детский билеты</span>
                  <Counter name={"both"} count={tCount.both} setCount={lol} />
                </div>
              </div>
            </div>
            <div className={s.final}>
              <div className={s.exact}>
                <span>
                  {getSpektName()}, {getDate()} - {getTime()}
                </span>
                {final.length
                  ? final.map((t, index) =>
                      t ? (
                        <span className={s.t} key={`${t}-${index}`}>
                          {t}&nbsp;
                          <svg
                            onClick={() => {
                              const key = Object.keys(tCount)[index];
                              lol({ [key]: 0 });
                            }}
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12ZM12 13.4143L13.4142 14.8285C13.8045 15.2189 14.4381 15.2189 14.8284 14.8285C15.2188 14.4382 15.2188 13.8047 14.8284 13.4143L13.4142 12.0001L14.8284 10.5859C15.2188 10.1956 15.2188 9.56201 14.8284 9.17169C14.4381 8.78137 13.8045 8.78137 13.4142 9.17169L12 10.5859L10.5858 9.17169C10.1955 8.78137 9.5619 8.78137 9.17157 9.17169C8.78125 9.56201 8.78125 10.1956 9.17157 10.5859L10.5858 12.0001L9.17157 13.4143C8.78125 13.8047 8.78125 14.4382 9.17157 14.8285C9.5619 15.2189 10.1955 15.2189 10.5858 14.8285L12 13.4143Z'
                              fill='#FF8863'
                            />
                          </svg>
                        </span>
                      ) : null
                    )
                  : null}
              </div>
              <p className={s.itogo}>Итого: {price} тг.</p>
            </div>
            <Button disabled={!final.length} name='Перейли к оплате' size='large' variant='three' />
          </form>
        </div>
        <img src={img} alt='' />
      </div>
    </section>
  );
};

const Counter = ({ name, count, setCount }: any) => {
  const plus = () => {
    setCount({ [name]: ++count });
  };

  const minus = () => {
    if (count === 0) {
      return;
    }
    setCount({ [name]: --count });
  };

  return (
    <div className={s.counter}>
      <span className={s.minus} onClick={minus}>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM15 13C11.2192 13 12.1735 13 9 13C8.448 13 8 12.552 8 12C8 11.448 8.448 11 9 11H15C15.552 11 16 11.448 16 12C16 12.552 15.552 13 15 13Z'
            fill='#FF8863'
          />
        </svg>
      </span>
      <span className={s.count} style={{ color: count < 1 ? "#FF8863" : "#38CB84" }}>
        {count}
      </span>
      <span className={s.plus} onClick={plus}>
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM15 13H13V15C13 15.552 12.552 16 12 16C11.448 16 11 15.552 11 15V13H9C8.448 13 8 12.552 8 12C8 11.448 8.448 11 9 11H11V9C11 8.448 11.448 8 12 8C12.552 8 13 8.448 13 9V11H15C15.552 11 16 11.448 16 12C16 12.552 15.552 13 15 13Z'
            fill='#38CB84'
          />
        </svg>
      </span>
    </div>
  );
};

const spektakl = [
  { id: 0, name: "kolobok", title: "Спектакль “Колобок”" },
  { id: 1, name: "aldar", title: "Спектакль “Алдар-Косе”" },
  { id: 2, name: "travel", title: "Спектакль “Путешествие по сказкам”" },
  { id: 3, name: "polyana", title: "Сказочная поляна" },
];

const dates = [
  { id: 0, name: "monday", date: "16 августа", title: "Понедельник" },
  { id: 10, name: "tuesday", date: "17 августа", title: "Вторник" },
  { id: 1, name: "wednesday", date: "18 августа", title: "Среда" },
  { id: 11, name: "thursday", date: "19 августа", title: "Четверг" },
  { id: 2, name: "friday", date: "20 августа", title: "Пятница" },
  { id: 3, name: "saturday", date: "21 августа", title: "Суббота" },
  { id: 4, name: "sunday", date: "22 августа", title: "Воскресенье" },
];

const time = {
  0: [
    { id: 0, slot: "12:00" },
    { id: 1, slot: "15:00" },
  ],
  1: [
    { id: 0, slot: "12:00" },
    { id: 1, slot: "15:00" },
  ],
  2: [
    { id: 0, slot: "11:00" },
    { id: 1, slot: "17:00" },
  ],
  3: [
    { id: 0, slot: "12:00" },
    { id: 1, slot: "15:00" },
  ],
  4: [
    { id: 0, slot: "13:00" },
    { id: 1, slot: "15:00" },
  ],
  10: [
    { id: 0, slot: "12:00" },
    { id: 1, slot: "15:00" },
  ],
  11: [
    { id: 0, slot: "12:00" },
    { id: 1, slot: "15:00" },
  ],
};
