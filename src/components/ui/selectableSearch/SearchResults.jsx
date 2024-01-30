import SearchItem from "./SearchItem";

export default function SearchResults({ suggestions, onSelect, selectedIds }) {
  const suggestionsUnique = suggestions.map((user) => {
    const isSelected = selectedIds.has(user.email);
    console.log(isSelected);
    return !isSelected ? (
      <SearchItem user={user} key={user.email} onSelect={onSelect} />
    ) : null;
  });

  //   console.log(suggestionsUnique);

  return (
    <ul className="absolute top-[100%] left-0 h-[300px] overflow-y-auto">
      {suggestionsUnique}
    </ul>
  );
}
