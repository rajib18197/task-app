export default function SelectedBox({ selectedIds, suggestions }) {
  const selectedUsers = suggestions.map((user) => {
    if (selectedIds.has(user.email)) {
      console.log(1, selectedIds);
      return (
        <div className="p-2 bg-stone-800 text-stone-50" key={user.email}>
          {user.firstName} {user.lastName}
        </div>
      );
    }

    return null;
  });

  console.log(selectedUsers);
  return <div className="flex items-center gap-2">{selectedUsers}</div>;
}
