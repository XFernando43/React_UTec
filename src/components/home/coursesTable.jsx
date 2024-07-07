import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import TableHeader from "./tableHeader";

async function getCourses() {
  try {
    const response = await fetch('http://localhost:3000/courses');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Courses:', data);
    return data;
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
}

export default function CourseTable() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getCourses().then(data => {
      if (data) {
        setProducts(data);
      }
    });
  }, []);

  const deleteUniversity = (code) => {
    console.log(`Delete university with code: ${code}`);
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <div className="flex gap-4">
        <Button label="Editar" className="p-button-success p-mr-2" />
        <Button label="Eliminar" className="p-button-danger" onClick={() => deleteUniversity(rowData.code)} />
      </div>
    );
  };

  return (
    <div className="bg-white"> 
      <div className="px-4 flex items-center gap-5">
        <i className="pi pi-server"></i>
        <p className="font-semibold text-2xl">Course Management</p>
      </div>
      <TableHeader />
      <DataTable value={products} showGridlines tableStyle={{ minWidth: "50rem" }}>
        <Column field="code" header="ID"></Column>
        <Column field="name" header="Nombre"></Column>
        <Column field="teacherCode" header="Código del Profesor"></Column>
        <Column body={actionBodyTemplate} header="Acción"></Column>
      </DataTable>
    </div>
  );
}
