import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
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
    return []; // Return an empty array if there's an error
  }
}

export default function CareerTable() {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    getCareers().then(data => {
      setCareers(data);
    });
  }, []);

  const deleteCareer = (code) => {
    // Implementar la lógica para eliminar una carrera aquí
    console.log(`Delete career with code: ${code}`);
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <div className="flex gap-4">
        <Button label="Editar" className="p-button-success p-mr-2" />
        <Button label="Eliminar" className="p-button-danger" onClick={() => deleteCareer(rowData.code)} />
      </div>
    );
  };

  return (
    <div className="bg-white">
      <div className="px-4 flex items-center gap-5">
        <i className="pi pi-server"></i>
        <p className="font-semibold text-2xl">Gestión de Carreras</p>
      </div>
      <TableHeader />
      <DataTable value={careers} showGridlines tableStyle={{ minWidth: "50rem" }}>
        <Column field="code" header="ID"></Column>
        <Column field="name" header="Nombre"></Column>
        <Column field="department" header="Departamento"></Column>
        <Column field="duration" header="Duración (años)"></Column>
        <Column field="credits" header="Créditos"></Column>
        <Column body={actionBodyTemplate} header="Acción"></Column>
      </DataTable>
    </div>
  );
}
