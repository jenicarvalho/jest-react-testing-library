import { useState } from 'react';
import { useForm } from "react-hook-form";

const Form = () => {

  const [name, setName] = useState('')

  const { register, handleSubmit } = useForm();

  const submit = (data: any) => {
    setName(data.user)
  }

  return (
    <div>
        <form data-testid="form" onSubmit={handleSubmit(submit)}>
          <label>Nome</label>
          <input
            name="user"
            title="digite"
            type="text"
            ref={register}
          />
          <button type="submit">Salvar</button>
      </form>

      <p title="nome">{name!== '' && name}</p>
    </div>
  );
}

export default Form;