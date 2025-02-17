import { Link } from "react-router-dom";
import { TasksHolder } from "../../../widgets/tasksHolder";
import styles from "./tasksPage.module.scss";
import { Button } from "../../../shared/ui/button";
import AddIcon from "@mui/icons-material/Add";

export function TasksPage() {
  return (
    <div className={styles.pageWrapper}>
      <Link to={"/create"}>
        <Button>
          <AddIcon />
        </Button>
      </Link>

      <TasksHolder />
    </div>
  );
}
