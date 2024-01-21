const nodes = [
  {
    title: "Tree Start",
  },
  {
    title: "Step 1",
  },
  {
    title: "Step 2",
    child: [
      {
        title: "Sub Tree",
        curve: true,
        child: [
          {
            title: "Step 1",
          },
        ],
      },
      {
        title: "Sub Tree",
        curve: true,
        child: [
          {
            title: "Step 1",
          },
        ],
      },
    ],
  },
];

export default function Box() {
  return (
    <div>
      <LinkedBox nodes={nodes} />
    </div>
  );
}

function LinkedBox({ nodes }) {
  return (
    <div className="bg-red-900 w-[400px] mx-auto">
      {nodes.map((node, i) => (
        <div key={i} className={`${node.curve ? "flex gap-2" : ""}`}>
          <div className="border-2 border-pink-400 p-2">
            <h2>
              {i + 1} {node.title}
            </h2>
          </div>
          {node.child ? (
            <LinkedBox nodes={node.child} />
          ) : (
            <div className="border-2 w-max">+</div>
          )}
        </div>
      ))}
    </div>
  );
}
