export default function FormRow({ label, children, error }) {
  return (
    <div className="space-y-2 lg:space-y-3">
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <p className="text-red-600 text-[16px]">{error}</p>}
    </div>
  );
}
