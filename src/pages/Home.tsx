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
            <PlusCircle size={18} weight="bold" />
          </button>
        </form>

        <div className={styles.content}>
          <div className={styles.totals}>
            <div className={styles.total}>
              <strong>Tarefas criadas</strong>
              <div className={styles.badge}>0</div>
            </div>

            <div className={styles.total}>
              <strong>Concluídas</strong>
              <div className={styles.badge}>0</div>
            </div>
          </div>

          <div className={styles.tasks}>
            <div className={styles.empty}>
              <img src="./src/empty-icon.png" />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
