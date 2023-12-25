import { useEffect, useState } from "react";
import "./App.css";

import { Table } from "./Table";

import TABLE_ROWS from "./MOCK_DATA.json";

function App() {
  const [search, setSearch] = useState("");
  const [searchCount, setSearchCount] = useState(0);

  useEffect(() => {
    const totoalCount = TABLE_ROWS.filter((person) => {
      if (search === "") {
        return;
      } else if (
        (person.first_name + " " + person.last_name)
          .toLowerCase()
          .includes(search) ||
        person.email.toLowerCase().includes(search)
      )
        return person;
    });

    setSearchCount(totoalCount.length);
  }, [search]);

  return (
    <>
      <h1 className="text-3xl font-bold align-content-center">Search Filter</h1>
      <div className="container mx-auto px-4 align-content-center md:container md:mx-auto">
        <div className="flex mx-auto flex-col p-4 m-4 align-center">
          <input
            className="s-xl p-3"
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
          />
          <button className="m-3 s-xl">Search</button>
          {search !== "" && (
            <div>
              Found {searchCount} result{searchCount > 1 ? "'s" : null}
            </div>
          )}
        </div>
      </div>
      <div className="flex m-auto p-5 md:container md:mx-auto">
        <Table search={search} />
      </div>
    </>
  );
}

export default App;
