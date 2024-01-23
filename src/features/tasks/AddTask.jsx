import Button from "../../components/ui/Button";

export default function AddTask({ onOpenModal }) {
  return (
    <>
      <Button bgColor="bg-blue-500" onSmash={onOpenModal}>
        Add Task
      </Button>
    </>
  );
}
