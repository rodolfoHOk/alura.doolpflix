import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // ex: nome: Filmes
    });
  }

  function handleChange(infosDoEvento) {
    // console.log('[values]', values);
    // console.log('[infosDoEvento.target,value]', infosDoEvento.target.value);
    // setNomeDaCategoria(infosDoEvento.target.value);
    // const { getAttribute, value } = infosDoEvento.target; deu bad
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
      // getAttribute('name'), deu bad
      // value, deu bad
    );
  }

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
    /*
    setTimeout(() => {
      setCategorias([
        ...categorias,
        {
          id: 1,
          nome: 'Front End',
          descricao: 'Uma categoria bacana',
          cor: '#6bd1ff',
        },
        {
          id: 2,
          nome: 'Back End',
          descricao: 'Outra categoria bacana',
          cor: '#6bd1ff',
        },
      ]);
    }, 4 * 1000); */
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form /* style={{background: values.cor}} */ onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        // console.log('Você tentou enviar o form né?');
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField // novo : movido para components/FormField/index.js
          label="Nome da Categoria"
          name="nome"
          value={values.nome}
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

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
