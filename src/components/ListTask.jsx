import { useContext } from "react";

import { CardTask } from "./CardTask";
import { GlobalState } from "../context/GlobalState";

const ListTask = () => {
  const { tasks } = useContext(GlobalState);

  return (
    <section >
      {tasks.map((task) => (
        <CardTask key={task.id} task={{ task }} />
      ))}
    </section>
  );
};

export default ListTask;
