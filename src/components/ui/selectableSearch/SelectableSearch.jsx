import { useState } from "react";
import Input from "./Input";
import SelectedBox from "./SelectedBox";
import SearchResults from "./SearchResults";
import { useApi } from "./useApi";
import { getData } from "./apiServices";

export default function SelectableSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);

  const [selectedIds, setSelectedIds] = useState(new Set([]));

  let suggestionsUnique = suggestions;
  if (searchTerm === "") suggestionsUnique = [];

  async function handleSearchTermChange(value) {
    setSearchTerm(value);
    try {
      setIsLoading(true);
      setError(null);
      const data = await getData(value);
      setSuggestions(data.users);
    } catch (err) {
      setError({ info: err.message });
    } finally {
      setIsLoading(false);
    }
  }

  function handleRemove(e) {
    console.log(e.key);
    if (e.key === "Backspace" && searchTerm === "" && selectedIds.size > 0) {
      const ids = [...selectedIds];
      const nextSelectedIds = new Set([...selectedIds]);
      nextSelectedIds.delete(ids[ids.length - 1]);
      setSelectedIds(nextSelectedIds);
      return;
    }
  }

  console.log(selectedIds);

  function handleSelected(name) {
    setSelectedIds((cur) => new Set([...cur, name]));
    setSearchTerm("");
  }

  return (
    <div className="bg-stone-100 px-2 relative rounded-full flex items-center">
      <SelectedBox selectedIds={selectedIds} suggestions={suggestions} />
      <div className="relative w-[400px] flex items-center">
        <Input
          searchTerm={searchTerm}
          onSearch={handleSearchTermChange}
          onKeyDown={handleRemove}
        />
        {isLoading ? (
          <div className="absolute top-[100%] left-0 h-[300px] overflow-y-auto">
            Loading
          </div>
        ) : (
          <SearchResults
            suggestions={suggestionsUnique}
            onSelect={handleSelected}
            selectedIds={selectedIds}
          />
        )}
      </div>
    </div>
  );
}
