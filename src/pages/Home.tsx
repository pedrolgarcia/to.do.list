import { PlusCircle } from "phosphor-react";
import { Header } from "../components/Header";

import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <form className={styles.form}>
          <input
            placeholder="Adicione uma nova tarefa"
            className={styles.input}
          />

          <button className={styles.createButton}>
            <span>Criar</span>
            <PlusCircle size={20} weight="bold" />
          </button>
        </form>
      </div>
    </>
  );
}

export default Home;
