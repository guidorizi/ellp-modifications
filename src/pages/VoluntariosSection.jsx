import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Voluntarios.module.css';

const voluntarios = [
  {
    nome: "Ana Silva",
    funcao: "Marketing",
    foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Especialista em psicologia escolar e mediação emocional.",
    historia: "Ana encontrou o projeto buscando maneiras de aplicar sua expertise em psicologia para ajudar na educação.",
    detalhesFuncao: "No marketing, Ana cria campanhas que conectam o projeto com a comunidade e apoiadores."
  },
  {
    nome: "Carlos Souza",
    funcao: "Ensino",
    foto: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Trabalha com inclusão educacional há mais de 10 anos.",
    historia: "Carlos se juntou ao projeto para promover práticas inclusivas na educação.",
    detalhesFuncao: "Ele lidera as iniciativas pedagógicas, garantindo que todos tenham acesso ao aprendizado."
  },
  {
    nome: "Jorge Lopes",
    funcao: "Product Owner",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Apaixonada por arte e educação, atua em oficinas criativas.",
    historia: "Jorge entrou no projeto para liderar e organizar as entregas e prioridades.",
    detalhesFuncao: "Como Product Owner, ele garante que o time entregue valor real à comunidade."
  },
  {
    nome: "Marina Gomez",
    funcao: "Desenvolvedor",
    foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Apaixonada por arte e educação, atua em oficinas criativas.",
    historia: "Marina se envolveu para ajudar na construção das ferramentas digitais do projeto.",
    detalhesFuncao: "Ela desenvolve funcionalidades que facilitam o uso do sistema pelos voluntários."
  },
  {
    nome: "Luca Pereira",
    funcao: "Recursos Humanos",
    foto: "https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Apaixonada por arte e educação, atua em oficinas criativas.",
    historia: "Luca entrou para ajudar na gestão e acolhimento dos voluntários.",
    detalhesFuncao: "Ela cuida do recrutamento, treinamento e bem-estar da equipe."
  },
];

export default function VoluntariosSection( ) {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const voluntario = voluntarios[paginaAtual];
  const totalPaginas = voluntarios.length;

  return (
    <div className={styles.voluntarioContainer}>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" className={styles.voltarButton || 'button'}>
          ← Voltar à Página Inicial
        </Link>
      </div>

      <h1>Todos os Voluntários</h1>

      <img src={voluntario.foto} alt={voluntario.nome} className={styles.imagem} />
      <h2>{voluntario.nome}</h2>
      <h3>{voluntario.funcao}</h3>
      <p>{voluntario.bio}</p>
      <p><strong>História:</strong> {voluntario.historia}</p>
      <p><strong>Detalhes da Função:</strong> {voluntario.detalhesFuncao}</p>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        {paginaAtual > 0 && (
          <button className={styles.pageButton} onClick={() => setPaginaAtual(paginaAtual - 1)}>
            Anterior
          </button>
        )}
        {paginaAtual < totalPaginas - 1 && (
          <button className={styles.pageButton} onClick={() => setPaginaAtual(paginaAtual + 1)}>
            Próximo
          </button>
        )}
      </div>
    </div>
  );
}
