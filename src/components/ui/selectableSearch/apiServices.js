const API_URL = "https://dummyjson.com/users/search";

export async function getData(searchTerm) {
  const response = await fetch(`${API_URL}?q=${searchTerm}`);

  if (!response.ok) {
    throw new Error("Could not load the data. Please try again!");
  }

  const data = await response.json();
  console.log(data);
  return data;
}
