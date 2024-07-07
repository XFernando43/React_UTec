import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TableHeader from "./tableHeader";

async function getUniversities() {
  try {
    const response = await fetch('http://localhost:3000/universities');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Universities:', data);
    return data;
  } catch (error) {
    console.error('Error fetching universities:', error);
  }
}


export default function UniversityTable() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getUniversities().then(data => {
      if (data) {
        setProducts(data);
      }
    });
  }, []);

  return (
    <div className="bg-white"> 
      <div className="px-4 flex items-center gap-5">
        <i className="pi pi-server"></i>
        <p className="font-semibold text-2xl">University Management</p>
      </div>
      <TableHeader />
      <DataTable value={products} showGridlines tableStyle={{ minWidth: "50rem" }}>
        <Column field="code" header="ID"></Column>
        <Column field="name" header="Nombre"></Column>
        <Column field="category" header="teacherCode"></Column>
        <Column field="description" header="Descripción"></Column>
        <Column field="users" header="Usuarios"></Column>
        <Column field="posts" header="Posts"></Column>
        <Column field="action" header="Acción"></Column>
      </DataTable>
    </div>
  );
}
