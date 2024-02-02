import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Accordion from "./components/ui/Accordion";
import AppLayout from "./components/ui/AppLayout";
import Box from "./components/ui/LinkedBox";
import SelectableSearch from "./components/ui/selectableSearch/SelectableSearch";
import Layout from "./components/ui/tic-tac-toe/Layout";
import Main from "./components/ui/Rerender";
import LRUCache from "./components/ui/LRUCache/LRUCache";

const questions = [
  {
    title: "JavaScript gets the Flexibility!",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reprehenderit quo magnam rerum enim neque, suscipit natus laboriosam ipsam amet eaque, qui maxime numquam quod. Magnam mollitia dolore totam quisquam!",
  },

  {
    title: "Golang is the best!",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reprehenderit quo magnam rerum enim neque, suscipit natus laboriosam ipsam amet eaque, qui maxime numquam quod. Magnam mollitia dolore totam quisquam!",
  },

  {
    title: "Java is the best!",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reprehenderit quo magnam rerum enim neque, suscipit natus laboriosam ipsam amet eaque, qui maxime numquam quod. Magnam mollitia dolore totam quisquam!",
  },

  {
    title: "React is the best!",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reprehenderit quo magnam rerum enim neque, suscipit natus laboriosam ipsam amet eaque, qui maxime numquam quod. Magnam mollitia dolore totam quisquam!",
  },

  {
    title: "Node is the best!",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reprehenderit quo magnam rerum enim neque, suscipit natus laboriosam ipsam amet eaque, qui maxime numquam quod. Magnam mollitia dolore totam quisquam!",
  },

  {
    title: "Math is the best!",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reprehenderit quo magnam rerum enim neque, suscipit natus laboriosam ipsam amet eaque, qui maxime numquam quod. Magnam mollitia dolore totam quisquam!",
  },
];

export default function App() {
  return (
    <>
      {/* <AppLayout />;
      <ToastContainer position="top-center" /> */}
      {/* <SelectableSearch /> */}
      {/* <Layout /> */}
      {/* <Main /> */}
      <LRUCache />
    </>
  );
  // return <Box />;
  // return (
  //   <Accordion className="grid grid-cols-3 gap-2">
  //     {questions.map((question, i) => (
  //       <Accordion.Box id={i} className=" rounded " key={question.title}>
  //         <Accordion.Header
  //           expandIcon={<span>Expand</span>}
  //           collapseIcon={<span>Collapse</span>}
  //         >
  //           <h3>{question.title}</h3>
  //         </Accordion.Header>

  //         <Accordion.Content className="bg-stone-200 p-2 rounded text-stone-900 relative left-[-100px] my-[20px] justify-self-end">
  //           <article>{question.description}</article>
  //         </Accordion.Content>
  //       </Accordion.Box>
  //     ))}
  //   </Accordion>
  // );
}
