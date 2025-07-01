import React from "react";
import { Link } from "react-router-dom";
import styles from "./VoluntariosResumo.module.css"; // Crie este arquivo CSS também

const voluntariosResumo = [
  {
    nome: "Ana Silva",
    funcao: "Marketing",
    foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    nome: "Carlos Souza",
    funcao: "Ensino",
    foto: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function VoluntariosResumo( ) {
  return (
    <div className={styles.container}>
      <h2>Nossos Voluntários</h2>
      <div className={styles.voluntariosGrid}>
        {voluntariosResumo.map((voluntario) => (
          <div key={voluntario.nome} className={styles.voluntarioCard}>
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
