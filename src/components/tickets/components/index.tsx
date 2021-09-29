import { FC } from "react";
import s from "../index.module.css";
import { dates } from "../helpers/mocks";

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

const AvailableDates: FC<any> = ({ spekt, cdate, setCdate, setCtime }) => {
  return (
    <>
      {dates.map(({ id, title, date }) => {
        if ((spekt === 0 && [0, 1, 2].includes(id)) || (spekt === 1 && [10, 11].includes(id))) {
          return <AvailableDate key={id} {...{ id, cdate, setCdate, setCtime, title, date }} />;
        }
        if (![0, 1].includes(spekt)) {
          return <AvailableDate key={id} {...{ id, cdate, setCdate, setCtime, title, date }} />;
        }
        return null;
      })}
      ;
    </>
  );
};

const AvailableDate: FC<any> = ({ id, cdate, setCdate, setCtime, title, date }) => {
  return (
    <label
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
};

export { Counter, AvailableDates, AvailableDate };
