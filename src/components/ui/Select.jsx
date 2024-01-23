export default function Select({ value, options, onSelect, ...props }) {
  return (
    <select
      className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
      value={value}
      onChange={onSelect}
      {...props}
    >
      <option value="">Select Priority</option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
