import { useEffect, useRef, useState } from "react";

export default function Main() {
  return (
    <div className="max-w-[500px] bg-stone-100 rounded p-4 mx-auto">
      <div className="relative flex flex-col gap-3">
        <div className="self-center w-[250px] flex flex-col justify-center items-center p-2 bg-stone-300 text-stone-800 rounded">
          <h3>Main</h3>
        </div>

        <span className="h-8 w-[3px] bg-cyan-800 self-center"></span>

        <Counter />
      </div>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(count);
  const refEl = useRef();

  useEffect(
    function () {
      if (prevCount.current !== count) {
        refEl.current.style.backgroundColor = "orangered";
      }
      prevCount.current = count;
      console.log(refEl.current);

      const timer = setTimeout(() => {
        refEl.current.style.backgroundColor = "revert-layer";
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    },
    [count]
  );

  return (
    <div className="flex flex-col gap-6">
      <div
        ref={refEl}
        className="self-center w-[250px] flex flex-col justify-center items-center p-2 bg-stone-300 text-stone-800 rounded"
      >
        <h3>Counter</h3>
        <h4>{count}</h4>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      </div>
      <div className="grid grid-cols-2 gap-2 relative">
        <span className="h-8 w-[3px] bg-orange-300"></span>
        <span className="h-8 w-[3px] bg-orange-300"></span>
        <BigCounter prevCount={prevCount} count={count} />
        <Decorations />
      </div>
    </div>
  );
}

function BigCounter({ prevCount, count }) {
  const refEl = useRef();
  useEffect(
    function () {
      if (prevCount.current !== count) {
        refEl.current.style.backgroundColor = "orangered";
      }

      const timer = setTimeout(() => {
        refEl.current.style.backgroundColor = "revert-layer";
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    },
    [count, prevCount]
  );
  return (
    <div ref={refEl} className="flex-1 p-2 bg-stone-300 text-stone-800 rounded">
      <h3>Big Counter</h3>
      <p>
        props: {"{"} count {"}"}
      </p>
    </div>
  );
}

function Decorations() {
  return (
    <div className="flex-1 p-2 bg-stone-300 text-stone-800 rounded">
      <h3>Decorations</h3>
    </div>
  );
}
