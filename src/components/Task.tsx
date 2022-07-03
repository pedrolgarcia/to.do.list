import { Check, Trash } from "phosphor-react";

import styles from "./Task.module.css";

import { Task as TaskType } from "../pages/Home";

export interface TaskProps {
  task: TaskType;
  onDoneTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({ task, onDoneTask, onDeleteTask }: TaskProps) {
  function handleDoneTask() {
    onDoneTask(task.id);
  }

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <button className={styles.checkbox} onClick={handleDoneTask}>
          {task.done ? (
            <div className={styles.checked}>
              <Check size={12} weight="bold" />
            </div>
          ) : (
            <div className={styles.unchecked} />
          )}
        </button>

        <span className={task.done ? styles.checkedText : styles.uncheckedText}>
          {task.task}
        </span>
      </div>

      <button className={styles.deleteButton} onClick={handleDeleteTask}>
        <Trash size={18} />
      </button>
    </div>
  );
}
