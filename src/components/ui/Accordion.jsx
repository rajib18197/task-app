import { cloneElement, createContext, useContext, useState } from "react";

const AccordionContext = createContext();

function useAccordionContext() {
  const context = useContext(AccordionContext);

  return context;
}

export default function Accordion({ className, children }) {
  const [openId, setOpenId] = useState(null);

  function toggle(id) {
    setOpenId((openId) => (openId === id ? null : id));
  }

  const value = { openId, toggle };

  return (
    <AccordionContext.Provider value={value}>
      <ul className={`bg-pink-400 p-2 ${className}`}>{children}</ul>
    </AccordionContext.Provider>
  );
}

const AccordionBoxContext = createContext();

function useAccordionBoxContext() {
  const context = useContext(AccordionBoxContext);
  return context;
}

function AccordionBox({ id, className, children }) {
  const { openId } = useAccordionContext();
  const isOpen = id === openId;
  return (
    <AccordionBoxContext.Provider value={id}>
      <li
        className={`${className}${
          isOpen ? "h-[100px]" : "h-[40px]"
        } transition-all duration-150 ease-linear`}
      >
        {children}
      </li>
    </AccordionBoxContext.Provider>
  );
}

function AccordionHeader({ expandIcon, collapseIcon, children }) {
  const { openId, toggle } = useAccordionContext();
  const boxId = useAccordionBoxContext();

  return (
    <div
      className="flex justify-between items-center"
      onClick={() => toggle(boxId)}
    >
      {children}
      {openId === boxId ? collapseIcon : expandIcon}
    </div>
  );
}

function AccordionContent({ className, children }) {
  const { openId } = useAccordionContext();
  const boxId = useAccordionBoxContext();

  const isOpen = boxId === openId;

  return cloneElement(children, {
    className: `${className} ${
      isOpen ? "scale-y-1 origin-top" : "scale-y-0 origin-top"
    } transition-all duration-150`,
  });
}

Accordion.Box = AccordionBox;
Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;
