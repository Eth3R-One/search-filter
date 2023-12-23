import { useState } from "react";
import "./App.css";

import { Table } from "./Table";

function App() {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  return (
    <>
      <h1 className="text-3xl font-bold">Search Filter</h1>
      <div className="container mx-auto px-4 md:container md:mx-auto">
        <div className="flex flex-">
          <input
            onChange={handleSearch}
            className="s-xl"
            type="text"
            placeholder="Search..."
          />
          <button onClick={handleSearch} className="m-3">
            Search
          </button>
        </div>
      </div>
      <div className="flex m-auto p-10">
        <Table />
      </div>
    </>
  );
}

export default App;
