export default function SearchItem({ user, onSelect }) {
  const { email, firstName, age } = user;

  return (
    <li
      className="p-2 bg-stone-800 text-stone-50 hover:bg-stone-600 flex items-center gap-2"
      onClick={() => onSelect(email)}
    >
      <h3>{firstName}</h3>
      <p>{age}</p>
    </li>
  );
}
