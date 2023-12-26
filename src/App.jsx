import { useEffect, useState } from "react";
import "./App.css";

import { Table } from "./Table";

import TABLE_ROWS from "./MOCK_DATA.json";

function App() {
  const [search, setSearch] = useState("");
  const [searchCount, setSearchCount] = useState(0);
  const [filterByGender, setFilterByGender] = useState("all");
  const [person, setPerson] = useState(TABLE_ROWS);

  useEffect(() => {
    const filteredPerson = TABLE_ROWS.filter((person) => {
      if (search === "") {
        return person;
      } else if (
        (person.first_name + " " + person.last_name)
          .toLowerCase()
          .includes(search) ||
        person.email.toLowerCase().includes(search)
      )
        return person;
    }).filter((person) => {
      if (filterByGender === "all") return person;
      else if (filterByGender === "m" && person.gender === "M") return person;
      else if (filterByGender === "f" && person.gender === "F") return person;
    });
    setSearchCount(filteredPerson.length);
    setPerson(filteredPerson);
  }, [search, filterByGender]);

  function handleOnchange(e) {
    setFilterByGender(e.target.value);
    setPerson(() => {
      return search === ""
        ? TABLE_ROWS
        : person.filter((per) => {
            if (filterByGender === "all") return person;
            else if (filterByGender === "m" && per.gender === "M")
              return person;
            else if (filterByGender === "f" && per.gender === "F")
              return person;
          });
    });
  }

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
          <div>
            <label>Filter </label>
            <select defaultValue={"all"} onChange={handleOnchange}>
              <option value="all">All</option>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </div>
          {search !== "" && (
            <div>
              Found {searchCount} result{searchCount > 1 ? "'s" : null}
            </div>
          )}
        </div>
      </div>
      <div className="flex m-auto p-5 md:container md:mx-auto">
        <Table person={person} />
      </div>
    </>
  );
}

export default App;
