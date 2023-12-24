import { Card, Typography } from "@material-tailwind/react";
import TABLE_ROWS from "./MOCK_DATA.json";
import { useState } from "react";

const TABLE_HEAD = ["", "Name", "Email", "Gender"];

export function Table({ search, searchCount = 0, setSearchCount }) {
  const isSearchedValid = (person) => {
    if (
      person.first_name.toLowerCase().includes(search) ||
      person.last_name.toLowerCase().includes(search) ||
      person.email.toLowerCase().includes(search) ||
      person.gender.toLowerCase().includes(search)
    ) {
      return true;
    }
    return false;
  };
  return (
    <Card className="h-full w-full ">
      <table className="w-full min-w-max table-auto text-center">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-100"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.filter((person) => {
            if (search === "") return person;
            // else if (person.first_name.toLowerCase().includes(search))
            //   return person;
            else if (
              person.first_name.toLowerCase().includes(search) ||
              person.last_name.toLowerCase().includes(search) ||
              person.email.toLowerCase().includes(search)
            ) {
              // setSearchCount((prev) => prev + 1);
              // setSearchCount((prev) => prev + 1);
              return person;
            }
            // isSearchedValid(person);
          }).map(({ id, first_name, last_name, email, gender }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast
              ? "p-4"
              : "p-4 border-b  border-blue-gray-50";
            // setSearchCount(countSearcch);
            console.log(searchCount);
            return (
              <tr key={id}>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {id}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {first_name} {last_name}
                  </Typography>
                </td>

                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    {gender === "M" ? "Male" : "Female"}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
