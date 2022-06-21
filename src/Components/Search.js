import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAdress, loadNewCep } from '../store/cep';

const Search = () => {
  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState('');
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const regex = /^\d{5}-?\d{3}$/;
    const validate = regex.test(cep);
    if (validate) {
      dispatch(loadNewCep(cep));
      setCep('');
      setError('');
    } else {
      setError('Prencha um CEP valido');
      setCep('');
      dispatch(deleteAdress());
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cep">Digite seu cep: </label>
        <input
          type="text"
          id="cep"
          value={cep}
          onChange={({ target }) => setCep(target.value)}
        />

        <button>Enviar</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Search;
