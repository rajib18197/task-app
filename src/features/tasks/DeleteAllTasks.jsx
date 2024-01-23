import { useState } from "react";
import Button from "../../components/ui/Button";
import ConfirmBox from "../../components/ui/ConfirmBox";

export default function DeleteAllTasks({ onDeleteAllTasks }) {
  const [isOpenConfirm, setIsOpenConfirm] = useState(false);

  return (
    <>
      <Button
        bgColor="bg-red-500"
        onSmash={() => setIsOpenConfirm((open) => !open)}
      >
        Delete All
      </Button>
      {isOpenConfirm && (
        <ConfirmBox
          onCloseModal={() => setIsOpenConfirm(false)}
          onDeleteTask={onDeleteAllTasks}
        />
      )}
    </>
  );
}
