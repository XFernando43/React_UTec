import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
export default function TeacherTable() {
    const [products] = React.useState([
        {
          code: 'T001',
          name: 'John Doe',
          category: 'Mathematics',
          description: 'Experienced Math teacher',
          users: 120,
          posts: 35,
          action: 'Edit'
        },
        {
          code: 'T002',
          name: 'Jane Smith',
          category: 'Science',
          description: 'Expert in Physics',
          users: 95,
          posts: 50,
          action: 'Edit'
        },
        {
          code: 'T003',
          name: 'Emily Johnson',
          category: 'History',
          description: 'Specialist in Modern History',
          users: 110,
          posts: 45,
          action: 'Edit'
        },
        {
          code: 'T004',
          name: 'Michael Brown',
          category: 'Literature',
          description: 'Focus on English Literature',
          users: 85,
          posts: 25,
          action: 'Edit'
        },
        {
          code: 'T005',
          name: 'Chris Davis',
          category: 'Physical Education',
          description: 'Sports and Fitness Expert',
          users: 130,
          posts: 30,
          action: 'Edit'
        }
      ]);
  return (
    <div>
      <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
        <Column field="code" header="ID"></Column>
        <Column field="name" header="NOMBRE"></Column>
        <Column field="category" header="Autor"></Column>
        <Column field="quantity" header="Description"></Column>
        <Column field="quantity" header="Usuarios"></Column>
        <Column field="quantity" header="Posts"></Column>
        <Column field="quantity" header="Accion"></Column>
      </DataTable>
    </div>
  );
}
