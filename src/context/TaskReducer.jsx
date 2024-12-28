

export default function TaskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
     
      return { tasks: [...state.tasks, action.payload], }
      ;

    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case "UPDATE_TASK": {
      const updateTask = action.payload;

      const updateTasks = state.tasks.map((task) => {
        if (task.id === updateTask.id) {
          task.title = updateTask.title;
          task.descripción = updateTask.descripción;
          task.icon = updateTask.icon;
          task.status = updateTask.status;
        }
        return task;
      });

      return {
        tasks: updateTasks,
       
      };
    }

    default:
      break;
  }
}
