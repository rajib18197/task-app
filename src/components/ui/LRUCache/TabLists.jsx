import { useState } from "react";
import TabsContentList from "./TabsContentList";

const tabs = [
  { name: "Tab 1" },
  { name: "Tab 2" },
  { name: "Tab 3" },
  { name: "Tab 4" },
];

export default function TabLists() {
  // {data: "", next: null}
  const [activeTab, setActiveTab] = useState(null);

  function handleActiveClick(name) {
    // traverse
    let head = activeTab;
    let cache;
    while (head?.next) {
      if (head.data === name) {
        cache = head;
        break;
      }

      head = head.next;
    }
    setActiveTab((act) => {
      function newActRec(act) {
        if (act.next === null) {
          return { ...act };
        }

        const a = act.data;
        const r = newActRec(act.next);
        return { data: a, next: r };
      }
      let temp = act ? newActRec(act) : {};
      console.log(temp);
      if (!temp.data) {
        temp = { data: name, next: null };
        return temp;
      }

      let cur = temp;

      while (cur?.next) {
        cur = cur.next;
      }
      console.log(cur, cache);
      if (cache) {
        cur.next = { ...cache, next: null };
      } else {
        cur.next = { data: name, next: null };
      }

      console.log(temp);
      return { ...temp };
    });
  }

  return (
    <div>
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <Tab tab={tab} key={tab.name} onActiveChange={handleActiveClick} />
        ))}
      </div>
      {activeTab && <TabsContentList activeTab={activeTab} />}
    </div>
  );
}

function Tab({ tab, onActiveChange }) {
  return (
    <button
      className="bg-stone-100 text-stone-800"
      onClick={() => onActiveChange(tab.name)}
    >
      {tab.name}
    </button>
  );
}
