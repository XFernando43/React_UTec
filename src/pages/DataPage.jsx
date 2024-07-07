import TeacherTable from "../components/home/teachersTable"
import TableHeader from "../components/home/tableHeader"


export default function HomePage(){
    return(
        <div className="min-h-screen max-w-full flex flex-col gap-2 justify-center items-center bg-slate-950">
            
            
            <TableHeader></TableHeader>
            <TeacherTable/>
        </div>
    )
}