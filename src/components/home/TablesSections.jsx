// import TableHeader from "./tableHeader"
import TeacherTable from "./teachersTable"
import ManagmentTable from "./TableManagment"
export default function TableSection(){
    return(
    <>
        <div className=" px-8 flex flex-col bg-slate-800 min-h-screen w-screen">
               
                
                <TeacherTable/>
                <ManagmentTable/>
            </div>
    
    </>)
}