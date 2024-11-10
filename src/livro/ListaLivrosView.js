import { findAll } from "./LivrosApi";

import { useState } from "react";

export function ListaLivrosView() {
  const [livros, setLivros] = useState([]);

  return (
    <main>
      <h1>Lista de livros</h1>
      <button
        onClick={async () => {
          const livros = await findAll();
          setLivros(livros);
        }}
      >
        LISTAR
      </button>

      <button>ADICIONAR</button>

      {livros.map((c) => (
        <div>
          <p>Tipo: {c.tipo}</p>
          <p>Nome: {c.nome}</p>
          <button>Excluir</button>
          <button>Editar</button>
        </div>
      ))}
    </main>
  );
}
