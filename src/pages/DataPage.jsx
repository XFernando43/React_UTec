import TeacherTable from "../components/home/teachersTable"
import TableHeader from "../components/home/tableHeader"
import SideBarHomePage from "../components/home/sideBar"
export default function HomePage(){
    return(
        <div className="min-h-screen max-w-full flex flex-row gap-2 justify-center items-center bg-slate-950">
            
            <SideBarHomePage></SideBarHomePage>
            <div>
            <TableHeader></TableHeader>
            <TeacherTable/>
            </div>
        </div>
    )
}