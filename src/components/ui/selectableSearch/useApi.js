import { useEffect, useState } from "react";

export function useApi({ apiService }) {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function loadData() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await apiService();
        setResults(data);
      } catch (err) {
        setError({ info: err.message });
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  return { isLoading, results, error };
}
