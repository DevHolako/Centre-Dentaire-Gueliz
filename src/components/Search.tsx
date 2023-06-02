import { useEffect, useState } from "react";
import "@styles/search/index.css";
import { useDebouncedState } from "@mantine/hooks";
import { Acte } from "@/utils/types";

type Props<T> = {
  setter: (data: T[]) => void;
  data: T[];
};

function Search({ setter, data }: Props<Acte>) {
  const [searchQuery, setSearchQuery] = useDebouncedState("", 100);
  const [originalData] = useState(data);

  useEffect(() => {
    const filteredData = originalData.filter(
      (row: Acte) =>
        row.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.prenom.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.method.toLowerCase().includes(searchQuery.toLowerCase()) ||
        row.acte.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setter(filteredData);
  }, [searchQuery, originalData, setter]);

  return (
    <div className="group">
      <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
        <g>
          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
      </svg>
      <input
        placeholder="Search"
        type="search"
        className="input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
