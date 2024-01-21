import TaskBox from "../../features/tasks/TaskBox";
import HeroSection from "../hero/HeroSection";
import Footer from "../footer/Footer";
import NavBar from "../navigation/NavBar";
import { useState } from "react";
import { TASKS_LIST } from "../../data/tasksData";
import TaskTable from "../../features/tasks/TaskTable";
import TaskController from "../../features/tasks/TaskController";
import Heading from "./Heading";
import TaskTableOperations from "../../features/tasks/TaskTableOperations";
import AddTask from "../../features/tasks/AddTask";
import SearchBar from "./SearchBar";
import Modal from "./Modal";
import CreateEditForm from "../../features/tasks/CreateEditForm";

export default function AppLayout() {
  const [tasksList, setTasksList] = useState(TASKS_LIST);
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleAddTask(newTask) {
    setTasksList((tasks) => [...tasks, newTask]);
  }

  function handleEditTask(task) {}

  function handleDeleteTask(id) {
    setTasksList((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleDeleteAllTask(id) {
    setTasksList([]);
  }

  return (
    <>
      {isOpenModal ? (
        <Modal>
          <CreateEditForm
            onAddTask={handleAddTask}
            onCancel={() => setIsOpenModal(false)}
          />
        </Modal>
      ) : (
        <>
          <NavBar />
          <HeroSection />

          <TaskBox>
            <TaskController>
              <Heading as={"h2"}>Your Tasks</Heading>
              <TaskTableOperations>
                <SearchBar />
                <AddTask onOpenModal={() => setIsOpenModal((open) => !open)} />
              </TaskTableOperations>
            </TaskController>

            <TaskTable tasksList={tasksList} />
          </TaskBox>

          <Footer />
        </>
      )}
    </>
  );
}
