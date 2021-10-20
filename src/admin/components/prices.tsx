import { getPrices, PricesProps } from "helpers";
import { FC, useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { update } from "./api";

export const Prices: FC = () => {
  const [prices, setPrices] = useState<PricesProps[]>([]);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const form = e.currentTarget;

    prices.forEach(({ code, id, price }) => {
      if (+form[code].value !== price) {
        update("price", { id, price: +form[code].value })
          .then(async () => {
            toast.success("Данные сохранены успешно!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            const { prices } = await getPrices();

            setPrices(prices);
          })
          .catch(() =>
            toast.error("Что-то пошло не так. Пожалуйста попробуйте снова", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
          );
      }
    });
  };

  useEffect(() => {
    const ff = async () => {
      const { prices } = await getPrices();

      setPrices(prices);
    };

    ff();
  }, []);

  return (
    <Form onSubmit={onSubmit}>
      {prices?.map(({ id, text: { text }, price, code }) => (
        <Form.Group as={Row} className='mb-3' controlId='formHorizontalPrice' key={id}>
          <Form.Label column sm={4}>
            {text}
          </Form.Label>
          <Col sm={8}>
            <Form.Control type='number' placeholder='Введите сцену' defaultValue={price} name={code} />
          </Col>
        </Form.Group>
      ))}
      <Form.Group as={Row} className='mb-3'>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type='submit'>Сохранить</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};
