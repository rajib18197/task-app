import Accordion from "./components/ui/Accordion";
import AppLayout from "./components/ui/AppLayout";
import Box from "./components/ui/LinkedBox";

const questions = [
  {
    title: "JavaScript gets the Flexibility!",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reprehenderit quo magnam rerum enim neque, suscipit natus laboriosam ipsam amet eaque, qui maxime numquam quod. Magnam mollitia dolore totam quisquam!",
  },

  {
    title: "JavaScript is the best!",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis reprehenderit quo magnam rerum enim neque, suscipit natus laboriosam ipsam amet eaque, qui maxime numquam quod. Magnam mollitia dolore totam quisquam!",
  },
];

export default function App() {
  // return <AppLayout />;
  // return <Box />;
  return (
    <Accordion className="flex flex-col gap-2">
      {questions.map((question, i) => (
        <Accordion.Box
          id={i}
          className="bg-pink-600 p-2 rounded "
          key={question.title}
        >
          <Accordion.Header
            expandIcon={<span>Expand</span>}
            collapseIcon={<span>Collapse</span>}
          >
            <h3>{question.title}</h3>
          </Accordion.Header>

          <Accordion.Content className="bg-stone-200 text-stone-900">
            <article>{question.description}</article>
          </Accordion.Content>
        </Accordion.Box>
      ))}
    </Accordion>
  );
}
