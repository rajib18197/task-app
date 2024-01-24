import Button from "./Button";
import Heading from "./Heading";

export default function ConfirmBox({ onDeleteTask, onCloseModal }) {
  return (
    <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-6 bg-stone-900 text-stone-50 w-[500px] rounded">
      <button
        className="absolute top-2 right-2 border-none outline-none text-2xl"
        onClick={onCloseModal}
      >
        &times;
      </button>
      <div className="flex flex-col gap-[14px]">
        <Heading as={"h3"}>Delete Task</Heading>
        <p className="leading-6 text-[18px] text-stone-400">
          Are you sure you want to delete this task permanently? This action
          cannot be undone.
        </p>

        <div className="flex gap-4 items-center self-end">
          <Button
            onSmash={onCloseModal}
            bgColor={"bg-stone-100"}
            color={"text-stone-800"}
          >
            Cancel
          </Button>
          <Button
            bgColor={"bg-red-600"}
            onSmash={() => {
              console.log(onDeleteTask);
              onDeleteTask();
              onCloseModal();
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
