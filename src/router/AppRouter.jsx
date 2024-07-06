import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/loginPage";

export default function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                {/* <Route></Route> */}
                <Route path="/login" element={<LoginPage/>}></Route>
            </Routes> 
        </BrowserRouter>
    )
}