import { useEffect, useState } from "react";
import "@styles/search/index.css";
import { Acte, Doc, User } from "@/utils/types";

type Props<T extends Acte | User | Doc> = {
  setter: (data: T[]) => void;
  data: T[];
  type: "Acte" | "User" | "Doc";
};

function Search<T extends Acte | User | Doc>({ setter, data, type }: Props<T>) {
  const [searchQuery, setSearchQuery] = useState("");
  const [originalData] = useState(data);

  useEffect(() => {
    const filteredData = originalData.filter((row) => {
      if (type === "Acte") {
        const acte = row as Acte;
        return (
          acte.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
          acte.prenom.toLowerCase().includes(searchQuery.toLowerCase()) ||
          acte.method.toLowerCase().includes(searchQuery.toLowerCase()) ||
          acte.acte.toLowerCase().includes(searchQuery.toLowerCase())
        );
      } else if (type === "User") {
        const user = row as User;
        return (
          user.nomComplete.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.login.toLowerCase().includes(searchQuery.toLowerCase())
        );
      } else if (type === "Doc") {
        const doc = row as Doc;
        return doc.nomComplete
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      }
      return false;
    });
    setter(filteredData);
  }, [searchQuery, originalData, setter, type]);

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
