import React from "react";
import styles from "./Home.module.css";
import EventosSection from "./EventosSection";
import VoluntariosSection from "./VoluntariosSection";
import ProximosEventos from "./ProximosEventos";
import VoluntariosResumo from "./VoluntariosResumo";

function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>ELLP</h1>
        <nav>
          <a href="#eventos">Eventos</a>
          <a href="#voluntarios">Voluntários</a>
        </nav>
      </header>

      <section id="eventos" className={styles.section}>
        <ProximosEventos />
      </section>

      <section id="voluntarios" className={styles.section}>
        <VoluntariosResumo />
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2025 ELLP. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
