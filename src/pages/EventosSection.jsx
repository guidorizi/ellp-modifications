import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Eventos.module.css'; // ajuste para o CSS correto que você usa

const eventos = [
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
  {
    id: 4,
    titulo: "Corrida e Saúde",
    descricao: "Evento esportivo com corrida e atividades de bem-estar.",
    imagem: "https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoria: "Esporte",
    data: "25/03/2025",
    local: "Rio de Janeiro - RJ",
    participantes: 120,
    coffee: true,
    gratuito: false,
  },
  {
    id: 5,
    titulo: "Oficina de Arte",
    descricao: "Atividades artísticas e criativas para todas as idades.",
    imagem: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoria: "Cultura",
    data: "30/03/2025",
    local: "Belo Horizonte - MG",
    participantes: 60,
    coffee: false,
    gratuito: true,
  }
];

export default function EventosSection( ) {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const evento = eventos[paginaAtual];
  const totalPaginas = eventos.length;

  return (
    <div className={styles.eventoContainer}>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" className={styles.voltarButton || 'button'}>
          ← Voltar à Página Inicial
        </Link>
      </div>
      
      <h1>Todos os Eventos</h1>
      
      <img src={evento.imagem} alt={evento.titulo} className={styles.imagem} />
      <h2>{evento.titulo}</h2>
      <p>{evento.descricao}</p>
      <p><strong>Categoria:</strong> {evento.categoria}</p>
      <p><strong>Data:</strong> {evento.data}</p>
      <p><strong>Local:</strong> {evento.local}</p>
      <p><strong>Participantes:</strong> {evento.participantes}</p>
      <p><strong>Coffee Break:</strong> {evento.coffee ? 'Sim' : 'Não'}</p>
      <p><strong>Gratuito:</strong> {evento.gratuito ? 'Sim' : 'Não'}</p>

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
