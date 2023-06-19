import DataTable from "react-data-table-component";

const data = [
  { id: 1, title: "Conan the Barbarian", year: "1982" },
  { id: 2, title: "Conan the Barbarian", year: "1982" },
  { id: 3, title: "Conan the Barbarian", year: "1982" },
];

const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
  },
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
];

const BasicTable = () => {
  return <DataTable data={data} columns={columns} />;
};

export default BasicTable;
