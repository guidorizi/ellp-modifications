import React from 'react';
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

export default function VoluntariosResumo( ) {
  const voluntariosExibidos = voluntarios.slice(0, 2); // Exibe apenas os 2 primeiros voluntários

  return (
    <div className={styles.container}>
      <h2>Nossos Voluntários</h2>
      <div className={styles.voluntariosGrid}>
        {voluntariosExibidos.map((voluntario, index) => (
          <div key={index} className={styles.voluntarioCard}>
            <img src={voluntario.foto} alt={voluntario.nome} className={styles.voluntarioImagem} />
            <h3>{voluntario.nome}</h3>
            <p>{voluntario.funcao}</p>
          </div>
        ))}
      </div>
      <Link to="/voluntarios" className={styles.verTodosButton}>
        Ver Todos os Voluntários
      </Link>
    </div>
  );
}
