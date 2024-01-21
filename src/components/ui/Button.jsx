export default function Button({ bgColor, onSmash, children }) {
  return (
    <button
      className={`rounded-md ${bgColor} px-3.5 py-2.5 text-sm font-semibold`}
      onClick={onSmash}
    >
      {children}
    </button>
  );
}
