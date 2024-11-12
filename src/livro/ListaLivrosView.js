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

      {livros.map((l) => (
        <div>
          <p>Title: {l.title}</p>
          <button>Excluir</button>
          <button>Editar</button>
        </div>
      ))}
    </main>
  );
}
