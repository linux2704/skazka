import { FormEvent, useCallback } from "react";
import { useState } from "react";
import { Button } from "../button";
import s from "./index.module.css";
import img from "./tickets.png";
import { spektakl, dates, time } from "./helpers/mocks";
import { AvailableDates, Counter } from "./components";
import { createPayment } from "./helpers/payment-helper";

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

  const testParams = {
    grant_type: "client_credentials",
    scope: "payment",
    client_id: "test",
    client_secret: "yF587AV9Ms94qN2QShFzVR3vFnWkhjbAK3sG",
    invoiceID: "100000001",
    amount: price,
    currency: "KZT",
    terminal: "67e34d63-102f-4bd1-898e-370781d0074d",
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    var formData = new FormData();
    Object.keys(testParams).forEach((key) => {
      // @ts-ignore
      formData.append(key, testParams[key]);
    });

    const description = `${getSpektName()}, ${getDate()} - ${getTime()}: ${final.join(",")}`;

    await createPayment(formData, { invoiceId: testParams.invoiceID, amount: price, description });
  };

  const updateCountAndPrice = useCallback(
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
                <AvailableDates {...{ spekt, cdate, setCdate, setCtime }} />
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
                  <Counter name={"adult"} count={tCount.adult} setCount={updateCountAndPrice} />
                </div>
                <div className={s.item}>
                  <span>Детский билет</span>
                  <Counter name={"child"} count={tCount.child} setCount={updateCountAndPrice} />
                </div>
                <div className={s.item}>
                  <span>Взрослый + Детский билеты</span>
                  <Counter name={"both"} count={tCount.both} setCount={updateCountAndPrice} />
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
                              updateCountAndPrice({ [key]: 0 });
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
            <Button disabled={!final.length || price < 1} name='Перейли к оплате' size='large' variant='three' />
          </form>
        </div>
        <img src={img} alt='' />
      </div>
    </section>
  );
};
