import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from "phosphor-react";

import { Header } from "../components/Header";
import { Task } from "../components/Task";

import styles from "./Home.module.css";

export interface Task {
  id: string;
  task: string;
  done: boolean;
}

function Home() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const _newTask: Task = {
      id: uuidv4(),
      task: newTask,
      done: false
    };

    setTasks([...tasks, _newTask]);

    setNewTask("");
  }

  function doneTask(id: string) {
    let newTasks = [...tasks];

    newTasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
    });

    setTasks(newTasks);
  }

  function deleteTask(id: string) {
    let updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  const completedTasks = tasks.reduce((completed, current) => {
    return current.done ? completed + 1 : completed;
  }, 0);

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleCreateNewTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            className={styles.input}
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />

          <button className={styles.createButton} onClick={handleCreateNewTask}>
            <span>Criar</span>
            <PlusCircle size={18} weight="bold" />
          </button>
        </form>

        <div className={styles.content}>
          <div className={styles.totals}>
            <div className={styles.total}>
              <strong>Tarefas criadas</strong>
              <div className={styles.badge}>
                <strong>{tasks.length}</strong>
              </div>
            </div>

            <div className={styles.completed}>
              <strong>Concluídas</strong>
              <div className={styles.badge}>
                <strong>
                  {completedTasks} de {tasks.length}
                </strong>
              </div>
            </div>
          </div>

          <div className={styles.tasks}>
            {tasks?.length > 0 ? (
              tasks.map((item) => (
                <Task
                  key={item.id}
                  task={item}
                  onDoneTask={doneTask}
                  onDeleteTask={deleteTask}
                />
              ))
            ) : (
              <div className={styles.empty}>
                <img src="./src/assets/empty-icon.png" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
