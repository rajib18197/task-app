export default function Heading({ as, children }) {
  let Type = "h1";

  switch (as) {
    case "h1":
      Type = as;
      return (
        <Type className="mb-1.5 text-[56px] font-bold leading-none text-[#F5BF42] lg:text-[73px]">
          {children}
        </Type>
      );

    case "h2":
      Type = as;
      return (
        <Type className="text-2xl font-semibold max-sm:mb-4">{children}</Type>
      );

    default:
      return "Unknown Heading Type. Provide a Valid Type!";
  }
}
