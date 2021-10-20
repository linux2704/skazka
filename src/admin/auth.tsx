import { FC } from "react";
import { Button, Form } from "react-bootstrap";

export const Auth: FC<any> = ({ set }) => {
  const onSubmit = (e: any) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = form["name"].value;
    const loh = form["loh"].value;

    if (name === "chicken" && loh === "$JdG&-82=NbbSB&T") {
      set(true);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className='mb-3' controlId='formBasicName'>
        <Form.Label>Name</Form.Label>
        <Form.Control name='name' type='name' placeholder='Enter name' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control name='loh' type='password' placeholder='Password' />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Войти
      </Button>
    </Form>
  );
};
