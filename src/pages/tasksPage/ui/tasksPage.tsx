import { TasksHolder } from "../../../widgets/tasksHolder";
import styles from "./tasksPage.module.scss";

export function TasksPage() {
  return (
    <div className={styles.pageWrapper}>
      <TasksHolder />
    </div>
  );
}
