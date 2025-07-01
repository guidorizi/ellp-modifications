import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Eventos.module.css';

const proximosEventos = [
  {
    id: 1,
    titulo: "Trabalho",
    descricao: "Pessoas trabalhando",
    imagem: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1170&auto=format&fit=crop",
    categoria: "Work",
    data: "2025-01-15"
  },
  {
    id: 2,
    titulo: "Feira de Inovação Tecnológica",
    descricao: "Exposição de tecnologia",
    imagem: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    categoria: "Tecnologia",
    data: "2025-01-20"
  },
  {
    id: 3,
    titulo: "Encontro Gastronômico",
    descricao: "Feira de comida",
    imagem: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    categoria: "Culinária",
    data: "2025-01-25"
  }
];

export default function ProximosEventos() {
  return (
    <div className={styles.eventoContainer}>
      <h2>Próximos Eventos</h2>
      <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
        {proximosEventos.map(evento => (
          <div key={evento.id} style={{ 
            display: 'flex', 
            gap: '1rem', 
            padding: '1rem', 
            border: '1px solid #ddd', 
            borderRadius: '8px',
            alignItems: 'center'
          }}>
            <img 
              src={evento.imagem} 
              alt={evento.titulo} 
              style={{ 
                width: '100px', 
                height: '100px', 
                objectFit: 'cover', 
                borderRadius: '8px' 
              }} 
            />
            <div>
              <h3>{evento.titulo}</h3>
              <p>{evento.descricao}</p>
              <p><strong>Categoria:</strong> {evento.categoria}</p>
              <p><strong>Data:</strong> {evento.data}</p>
            </div>
          </div>
        ))}
      </div>
      
      <Link to="/eventos" className={styles.pageButton}>
        Ver Todos os Eventos
      </Link>
    </div>
  );
}

