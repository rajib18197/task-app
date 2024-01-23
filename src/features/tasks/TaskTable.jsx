import TaskRow from "./TaskRow";

export default function TaskTable({ tasksList, onEditTask, onDeleteTask }) {
  if (tasksList.length === 0)
    return (
      <h2>
        No Tasks in the List! Start adding some tasks to your Bucket list 🚀
      </h2>
    );

  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
              Title
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
              Description
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
              Tags
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Priority
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Options
            </th>
          </tr>
        </thead>

        <tbody>
          {tasksList.map((task) => (
            <TaskRow
              key={task.id}
              task={task}
              onEditTask={onEditTask}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
