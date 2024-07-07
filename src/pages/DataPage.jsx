import TeacherTable from "../components/home/teachersTable"
import TableHeader from "../components/home/tableHeader"
import SideBarHomePage from "../components/home/sideBar"
export default function HomePage(){
    return(
        <div className="min-h-screen grid grid-cols-[20%_80%] bg-slate-100">
            
            <SideBarHomePage></SideBarHomePage>
            <div className="flex flex-col items-center justify-center">
                <TableHeader></TableHeader>
                <TeacherTable/>
            </div>
        </div>
    )
}