export default function ConfirmBox({ onDeleteTask, onCloseModal }) {
  return (
    <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-2 bg-stone-800 text-stone-50">
      <button
        className="absolute top-2 right-2 border-none outline-none text-xl"
        onClick={onCloseModal}
      >
        &times;
      </button>
      <div className="flex flex-col gap-2">
        <h2 className="uppercase">Delete Task</h2>
        <p>
          Are you sure you want to delete this cabins permanently? This action
          cannot be undone.
        </p>

        <div className="items-end">
          <button onClick={onCloseModal}>Cancel</button>
          <button
            onClick={() => {
              console.log(onDeleteTask);
              onDeleteTask();
              onCloseModal();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
