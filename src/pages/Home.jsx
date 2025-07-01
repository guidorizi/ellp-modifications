import React from "react";
import ProximosEventos from "./ProximosEventos";
import VoluntariosResumo from "./VoluntariosResumo";
import styles from "./Eventos.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>ELLP</h1>
        <nav className={styles.nav}>
          <a href="/eventos" className={styles.navLink}>EVENTOS</a>
          <a href="/voluntarios" className={styles.navLink}>VOLUNTÁRIOS</a>
        </nav>
      </header>

      <main>
        <section className={styles.section}>
          <ProximosEventos />
        </section>

        <section className={styles.section}>
          <VoluntariosResumo />
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Made with Manus Create my website</p>
      </footer>
    </div>
  );
}
