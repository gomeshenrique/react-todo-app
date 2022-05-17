import { FormEvent, useState } from "react";
import { TodoList } from "../TodoList/TodoList";

export function TodoInput(props: any) {
  const [task, setTask] = useState<any>("");

  function handleTask(event: FormEvent) {
    event.preventDefault();

    const tasks = {
      id: Date.now(),
      task,
    };

    setTask(tasks);

    console.log(tasks);
  }

  return (
    <div className="input-wrapper">
      <form onSubmit={handleTask}>
        <input
          onChange={(event) => setTask(event.target.value)}
          type="text"
          placeholder="Add your task here..."
        />
        <button type="submit">Add</button>
      </form>
      <TodoList tasks={task} />
    </div>
  );
}
