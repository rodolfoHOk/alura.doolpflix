import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import CategoriasRepository from '../../../repositories/categorias';

function EdicaoCategoria() {
  const location = useLocation();

  const { data } = location;
  console.log(data);

  // eslint-disable-next-line no-unused-vars
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    titulo: data[1],
    descricao: data[2],
    cor: data[3],
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const history = useHistory();

  useEffect(() => {
    const URL_CAT = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://doolpflix.herokuapp.com/categorias';
    fetch(URL_CAT)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Editar Categoria:
        {'  '}
        {values.titulo}
      </h1>

      <form
        id="form"
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          CategoriasRepository.edit({
            titulo: values.titulo,
            descricao: values.descricao,
            cor: values.cor,
          }, data[0]);
          history.push('/cadastro/video');
        }}
        onReset={(event) => {
          event.preventDefault();
          clearForm();
        }}
      >

        <FormField
          label="Nome da Categoria"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button.B
          btnType="Submit"
          form="form"
          type="Submit"
        >
          Editar
        </Button.B>

        <Button.C
          btnType="Reset"
          form="form"
          type="Reset"
        >
          Limpar
        </Button.C>
      </form>

      <Button.A as={Link} to="/">
        Ir para home
      </Button.A>
    </PageDefault>
  );
}

export default EdicaoCategoria;
