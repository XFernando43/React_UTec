import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TableHeader from "./tableHeader";

async function getTeachers() {
  try {
    const response = await fetch('http://localhost:3000/teachers');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Teachers:', data);
    return data;
  } catch (error) {
    console.error('Error fetching teachers:', error);
  }
}

export default function TeacherTable() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getTeachers().then(data => {
      if (data) {
        setProducts(data);
      }
    });
  }, []);

  return (
    <div>
      <div className="flex flex-row items-center gap-5 text-white">
        <i className="pi pi-server text-5xl"></i>
        <h1 className="font-semibold text-4xl Barlow">
          Administración de Foros
        </h1>
      </div>

      <TableHeader />
      <DataTable
        value={products}
        showGridlines
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="code" header="ID"></Column>
        <Column field="name" header="NOMBRE"></Column>
        <Column field="category" header="Autor"></Column>
        <Column field="description" header="Description"></Column>
        <Column field="users" header="Usuarios"></Column>
        <Column field="posts" header="Posts"></Column>
        <Column field="action" header="Accion"></Column>
      </DataTable>
    </div>
  );
}
