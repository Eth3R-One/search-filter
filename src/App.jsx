import { useState } from "react";
import "./App.css";

import { Table } from "./Table";

function App() {
  const [search, setSearch] = useState("");
  const [searchCount, setSearchCount] = useState(0);

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
          {(search !== "") & <div>Count:`${searchCount}`</div>}
        </div>
      </div>
      <div className="flex m-auto p-5 md:container md:mx-auto">
        <Table
          search={search}
          searchCount={searchCount}
          setSearchCount={setSearchCount}
        />
      </div>
    </>
  );
}

export default App;
