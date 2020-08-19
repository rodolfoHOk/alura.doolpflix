import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACKEND_TOP}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIAS}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possivel pegar dados :(');
    });
}

function getAll() {
  return fetch(`${URL_CATEGORIAS}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possivel pegar dados :(');
    });
}

function create(objetoDaCategoria) {
  return fetch(`${URL_CATEGORIAS}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDaCategoria),
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível cadastrar dados :(');
    });
}

function edit(objetoDaCategoria, id) {
  fetch(`${URL_CATEGORIAS}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objetoDaCategoria),
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível editar dados :(');
    });
}

function remove(objetoDaCategoria, id) {
  fetch(`${URL_CATEGORIAS}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objetoDaCategoria),
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível remover dados :(');
    });
}

export default {
  getAllWithVideos,
  getAll,
  create,
  edit,
  remove,
};
