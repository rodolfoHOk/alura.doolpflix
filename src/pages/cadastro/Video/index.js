import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import VideosRepository from '../../../repositories/videos';
import CategoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();

  const [categorias, setCategorias] = useState([]);

  const categoryTitles = categorias.map(({ titulo }) => titulo);

  const { handleChange, values, clearForm } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    CategoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  // console.log(categorias);
  // console.log(categoryTitles);

  return (
    <PageDefault className="BackColor">
      <h1>Cadastro de Vídeo</h1>

      <form
        id="form"
        onSubmit={(event) => {
          event.preventDefault();
          // alert('Video cadastrado com sucesso!!!');
          // eslint-disable-next-line arrow-body-style
          const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === values.categoria;
          });
          VideosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
          })
            .then(() => {
            // console.log('Cadastrou com sucesso!');
              history.push('/');
            });
        }}
        onReset={clearForm}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button.B
          btntype="Submit"
          form="form"
          type="Submit"
        >
          Cadastrar
        </Button.B>

        <Button.C
          btntype="Reset"
          form="form"
          type="Reset"
        >
          Limpar
        </Button.C>
      </form>

      <Button.A as={Link} to="/cadastro/categoria">
        Cadastrar Categoria
      </Button.A>
    </PageDefault>
  );
}

export default CadastroVideo;
