import { Button, Col, Form, Row } from "react-bootstrap";
import { dates } from "components/tickets/helpers/mocks";
import { FC, useState } from "react";
import { toast } from "react-toastify";
import { update } from "./api";

export const TicketsAdmin: FC<any> = ({ id, title, availableDates }) => {
  const [datesChecked, setChecked] = useState<any[]>(availableDates || []);

  const onSubmit = (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    const titleFromForm = form["name"].value;

    update("ticket", { id, title: titleFromForm, availableDates: datesChecked })
      .then(() =>
        toast.success("Данные сохранены успешно!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      )
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
  };

  const handleOnChange = (position: number) => {
    if (datesChecked?.includes(position)) {
      const i = datesChecked.findIndex((iii) => position === iii);
      const lol = [...datesChecked];
      lol.splice(i, 1);
      setChecked(lol);
    } else {
      const e = [...datesChecked];
      e.push(position);
      setChecked(e);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group as={Row} className='mb-3' controlId='formHorizontalTitle'>
        <Form.Label column sm={2}>
          Название:
        </Form.Label>
        <Col sm={10}>
          <Form.Control name='name' type='text' placeholder='Введите название' defaultValue={title} />
        </Col>
      </Form.Group>
      <fieldset>
        <Form.Group as={Row} className='mb-3'>
          <Form.Label as='legend' column sm={2}>
            Дни
          </Form.Label>
          <Col sm={10}>
            {dates?.map(({ id, title, name }: any) => (
              <Form.Check
                key={id}
                name='dates'
                type='checkbox'
                label={title}
                id={name}
                onChange={() => handleOnChange(id)}
                checked={datesChecked?.includes(id)}
              />
            ))}
          </Col>
        </Form.Group>
      </fieldset>

      <Form.Group as={Row} className='mb-3'>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type='submit'>Сохранить</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};
