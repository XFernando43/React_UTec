import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import TableHeader from "./tableHeader";
import { Button } from "primereact/button";

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
    return []; // Return an empty array if there's an error
  }
}

export default function TeacherTable() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    getTeachers().then(data => {
      setTeachers(data);
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
    <div>
      <div className="flex flex-row items-center gap-5 text-white">
        <i className="pi pi-server text-5xl"></i>
        <h1 className="font-semibold text-4xl Barlow">
          Administración de Foros
        </h1>
      </div>

      <TableHeader />
      <DataTable
        value={teachers}
        showGridlines
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="code" header="ID"></Column>
        <Column field="name" header="NOMBRE"></Column>
        <Column field="category" header="Categoría"></Column>
        <Column field="description" header="Descripción"></Column>
        <Column field="users" header="Usuarios"></Column>
        <Column field="posts" header="Publicaciones"></Column>
        <Column body={actionBodyTemplate} header="Acción"></Column>
      </DataTable>
    </div>
  );
}
