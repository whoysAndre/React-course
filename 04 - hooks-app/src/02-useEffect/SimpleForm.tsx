import { ChangeEvent, useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'kidNan',
    email: 'rodrigo@gogle.com'
  });

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  };


  useEffect(() => {

    // ? Función que debamos ejecutar
    console.log('useEffect called!')

    // !desmontamos el effect
    return () => {

    }


  }, []); // ? [dependencias]

  return (
    <>
      <h1>Simple Form</h1>

      <hr />

      <input
        type="text"
        className="form-control"
        name="username"
        placeholder="who is"
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        name="email"
        placeholder="email@google.com"
        onChange={onInputChange}
      />

      {
        formState.username === 'KidNan' && (
          <Message />
        )
      }


    </>
  )
}
