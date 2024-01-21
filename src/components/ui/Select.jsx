export default function Select({ options, onSelect }) {
  return (
    <select
      class="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
      name="priority"
      id="priority"
      onChange={onSelect}
      required
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