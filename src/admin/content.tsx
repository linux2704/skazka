import { SProps } from "components/tickets/helpers/mocks";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { TicketsAdmin } from "./components/tickets";
import { getBirthdays, getTickets, BdayProps, ShowProps, getShows } from "helpers";
import { Prices } from "./components/prices";
import { Birthday } from "./components/birthdays";
import { Show } from "./components/show";

export const Content = () => {
  const [spektakl, setSpektakl] = useState<SProps[]>([]);
  const [birthdays, setBirthdays] = useState<BdayProps[]>([]);
  const [shows, setShows] = useState<ShowProps[]>([]);

  useEffect(() => {
    const ff = async () => {
      const { tickets } = await getTickets();
      const { birthdays } = await getBirthdays();
      const { shows } = await getShows();
      setSpektakl(tickets);
      setBirthdays(birthdays);
      setShows(shows);
    };

    ff();
  }, []);
  return (
    <>
      <Row>
        <Col sm={6}>
          <h3>Покупка билетов</h3>
          {spektakl?.map((s) => (
            <React.Fragment key={s.id}>
              <hr />
              <TicketsAdmin {...s} />
            </React.Fragment>
          ))}
        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm={6}>
          <h3>Цены</h3>
          <hr />
          <Prices />
        </Col>
      </Row>

      <hr />
      <h3>Дни рождения</h3>
      <hr />
      {birthdays.map((bday) => (
        <Birthday {...bday} key={bday.id} />
      ))}

      <hr />
      <h3>Спектакли</h3>
      <hr />
      {shows.map((show) => (
        <Show {...show} key={show.id} />
      ))}
    </>
  );
};
