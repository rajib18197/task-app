import Container from "../../components/ui/Container";

export default function TaskBox({ children }) {
  // Since the Box does not placed in the center as shown in the original UI that's why I added flex to make it right
  return (
    <section className="mb-20 flex items-center justify-center" id="tasks">
      <Container>
        <div
          className="rounded-xl border border-[rgba(206,206,206,0.12)] 
        bg-[#1D212B] px-6 py-8 md:px-9 md:py-16"
        >
          {children}
        </div>
      </Container>
    </section>
  );
}
