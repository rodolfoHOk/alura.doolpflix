import React, {useState} from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

function CadastroCategoria(){
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor, // ex: nome: Filmes
    })
  }

  function handleChange(infosDoEvento){
    // console.log('[values]', values);
    // console.log('[infosDoEvento.target,value]', infosDoEvento.target.value);
    // setNomeDaCategoria(infosDoEvento.target.value);
    // const { getAttribute, value } = infosDoEvento.target; deu bad
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
      // getAttribute('name'), deu bad
      // value, deu bad
    );
  }

    return(
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

      <form /*style={{background: values.cor}}*/ onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        // console.log('Você tentou enviar o form né?');
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais);
      }}>

        <FormField // novo : movido para components/FormField/index.js
          label='Nome da Categoria'
          type='text'
          name='nome'
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label='Descrição'
          type='textarea'
          name='descricao'
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label='Cor'
          type='color' 
          name='cor'
          value={values.cor}
          onChange={handleChange}
        />
        
        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
                {categoria.nome}
            </li>
          )
        })
        }
      </ul>

        <Link to='/'>
          Ir para home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria