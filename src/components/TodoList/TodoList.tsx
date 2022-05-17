export function TodoList(props: any) {
  return (
    <div>
      <p>{props.tasks.id}</p>
      <p>{props.tasks.task}</p>
    </div>
  );
}
