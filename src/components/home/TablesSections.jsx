import TableHeader from "./tableHeader"
import TeacherTable from "./teachersTable"
export default function TableSection(){
    return(
    <>
        <div className="pl-10 flex flex-col bg-slate-800 min-h-screen w-screen">
                <div className="flex flex-row items-center gap-10 text-white">
                    <i className="pi pi-server text-8xl"></i>
                    <h1 className="font-semibold text-6xl Barlow">Administración de Foros</h1>
                </div>
                <TableHeader></TableHeader>
                <TeacherTable/>
            </div>
    
    </>)
}