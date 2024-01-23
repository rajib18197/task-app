export default function Button({ bgColor, color = "", onSmash, children }) {
  return (
    <button
      className={`rounded-md ${bgColor} ${color} px-3.5 py-2.5 text-sm font-semibold`}
      onClick={onSmash}
    >
      {children}
    </button>
  );
}
