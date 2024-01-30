import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { searchTerm, onSearch, ...props },
  ref
) {
  return (
    <input
      type="text"
      className="border-2 text-stone-900 p-3 outline-none bg-transparent"
      value={searchTerm}
      placeholder="Search here"
      onChange={(e) => onSearch(e.target.value)}
      {...props}
    />
  );
});

export default Input;
