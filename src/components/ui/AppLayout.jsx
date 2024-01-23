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
import ConfirmBox from "./ConfirmBox";
import DeleteAllTasks from "../../features/tasks/DeleteAllTasks";
import { toast } from "react-toastify";

export default function AppLayout() {
  const [tasksList, setTasksList] = useState(TASKS_LIST);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  let filteredTasksList = tasksList;
  if (searchTerm.length > 0)
    filteredTasksList = filteredTasksList.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  console.log(filteredTasksList);

  function handleAddTask(newTask) {
    setTasksList((tasks) => {
      const nextTasksList = [...tasks];

      const editedTaskIndex = nextTasksList.findIndex(
        (task) => task.id === newTask.id
      );

      console.log(editedTaskIndex);

      if (editedTaskIndex !== -1) {
        nextTasksList[editedTaskIndex] = newTask;
        return nextTasksList;
      }

      return [...tasks, newTask];
    });
  }

  function handleEditTask(task) {
    console.log(task);
    setTaskToEdit(task);
    setIsOpenModal(true);
  }

  function handleDeleteTask(id) {
    setTasksList((tasks) => tasks.filter((task) => task.id !== id));
    toast.success("Task successfully deleted");
  }

  function handleDeleteAllTask(id) {
    setTasksList([]);
    toast.success("All Task successfully deleted");
  }

  return (
    <>
      {isOpenModal ? (
        <Modal>
          <CreateEditForm
            onAddTask={handleAddTask}
            taskToEdit={taskToEdit}
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
                <SearchBar
                  searchTerm={searchTerm}
                  onSearchTermChange={setSearchTerm}
                />

                <AddTask
                  onOpenModal={() => {
                    setIsOpenModal((open) => !open);
                    setTaskToEdit(null);
                  }}
                />

                <DeleteAllTasks onDeleteAllTasks={handleDeleteAllTask} />
              </TaskTableOperations>
            </TaskController>

            <TaskTable
              tasksList={filteredTasksList}
              onEditTask={handleEditTask}
              onDeleteTask={handleDeleteTask}
            />
          </TaskBox>

          <Footer />
        </>
      )}
    </>
  );
}
