export default function Input({ type, className, ...props }) {
  return (
    <input
      className={`block w-full rounded-md bg-[#2D323F] px-3 py-2.5 ${className}`}
      type={type}
      {...props}
    />
  );
}
