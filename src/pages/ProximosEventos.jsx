import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProximosEventos.module.css";

const proximosEventos = [
  {
    id: 1,
    titulo: "Trabalho",
    descricao: "Pessoas trabalhando em equipe, compartilhando ideias e produtividade no ambiente profissional.",
    imagem: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoria: "Work",
    data: "12/03/2025",
    local: "São Paulo - SP",
    participantes: 50,
    coffee: true,
    gratuito: true,
  },
  {
    id: 2,
    titulo: "Feira de Inovação Tecnológica",
    descricao: "Exposição de novas tecnologias, startups e soluções inovadoras para o mercado.",
    imagem: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    categoria: "Tecnologia",
    data: "15/03/2025",
    local: "Campinas - SP",
    participantes: 100,
    coffee: false,
    gratuito: false,
  },
  {
  id: 3,
    titulo: "Encontro Gastronômico",
    descricao: "Feira de comidas típicas e internacionais para todos os gostos.",
    imagem: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    categoria: "Culinária",
    data: "20/03/2025",
    local: "Curitiba - PR",
    participantes: 75,
    coffee: false,
    gratuito: true,
  },
];

export default function ProximosEventos( ) {
  return (
    <div className={styles.container}>
      <h2>Próximos Eventos</h2>
      {proximosEventos.map((evento) => (
        <div key={evento.id} className={styles.eventoCard}>
          <img src={evento.imagem} alt={evento.titulo} className={styles.eventoImagem} />
          <div className={styles.eventoInfo}>
            <h3>{evento.titulo}</h3>
            <p>{evento.descricao}</p>
            <p><strong>Categoria:</strong> {evento.categoria}</p>
            <p><strong>Data:</strong> {evento.data}</p>
          </div>
        </div>
      ))}
      <Link to="/eventos" className={styles.verTodosButton}>
        Ver Todos os Eventos
      </Link>
    </div>
  );
}
