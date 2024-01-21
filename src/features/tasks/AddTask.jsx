import { useState } from "react";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import CreateEditForm from "./CreateEditForm";

export default function AddTask({ onOpenModal }) {
  return (
    <>
      <Button bgColor="bg-blue-500" onSmash={onOpenModal}>
        Add Task
      </Button>
    </>
  );
}
