import React from 'react';
import { useSelector } from 'react-redux';
import Loading from './Loading';

const Data = () => {
  const { data, loading, error } = useSelector((state) => state.cep);

  if (loading) return <Loading />;
  if (error || data.erro) return <p>Erro no fetch</p>;
  if (data.length !== 0)
    return (
      <section>
        <div>
          {data.logradouro} - {data.bairro}{' '}
        </div>

        <div>
          {data.localidade} - {data.uf}{' '}
        </div>

        <iframe
          title="Endereco"
          width="600"
          height="500"
          src={`https://maps.google.com/maps?q=${data.cep}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          frameBorder="0"
        ></iframe>
      </section>
    );
};

export default Data;
