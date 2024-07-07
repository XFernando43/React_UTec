import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TableHeader from "./tableHeader";

async function getCareers() {
  try {
    const response = await fetch('http://localhost:3000/careers');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Careers:', data);
    return data;
  } catch (error) {
    console.error('Error fetching careers:', error);
  }
}

export default function CareerTable() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getCareers().then(data => {
      if (data) {
        setProducts(data);
      }
    });
  }, []);

  return (
    <div className="bg-white"> 
      <div className="px-4 flex items-center gap-5">
        <i className="pi pi-server"></i>
        <p className="font-semibold text-2xl">Career Management</p>
      </div>
      <TableHeader />
      <DataTable value={products} showGridlines tableStyle={{ minWidth: "50rem" }}>
        <Column field="code" header="ID"></Column>
        <Column field="name" header="Nombre"></Column>
        <Column field="department" header="Departamento"></Column>
        <Column field="duration" header="Duración (años)"></Column>
        <Column field="credits" header="Créditos"></Column>
        <Column field="degree" header="Grado"></Column>
        <Column field="action" header="Acción"></Column>
      </DataTable>
    </div>
  );
}
