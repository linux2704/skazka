import { FC } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { update } from "./api";

export const Birthday: FC<any> = ({ id, title, description, body }) => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    const _title = form["title"].value;
    const _description = form["description"].value;
    const _body = form["body"].value;

    update("birthday", { id, title: _title, description: _description, body: _body }).then(() =>
      toast.success("Данные сохранены успешно!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    );
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group as={Row} className='mb-3' controlId='formHorizontalPrice' key={id}>
        <Form.Label column sm={2}>
          Заголовок
        </Form.Label>
        <Col sm={8}>
          <Form.Control type='text' placeholder='Введите заголовок' defaultValue={title} name='title' />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className='mb-3' controlId='formHorizontalPrice' key={id}>
        <Form.Label column sm={2}>
          - это
        </Form.Label>
        <Col sm={8}>
          <Form.Control type='text' placeholder='Введите текст' defaultValue={description} name='description' />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className='mb-3' controlId='formHorizontalPrice' key={id}>
        <Form.Label column sm={2}>
          Описание
        </Form.Label>
        <Col sm={8}>
          <Form.Control as='textarea' rows={4} placeholder='Введите описание' defaultValue={body} name='body' />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className='mb-3'>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type='submit'>Сохранить</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};
