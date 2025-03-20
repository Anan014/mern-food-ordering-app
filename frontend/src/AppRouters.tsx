import { Navigate, Route, Routes } from "react-router-dom"

const AppRouters = ()=>{
    return(
        <Routes>
            <Route path="/" element={<span>Home page</span>} />
            <Route path="/user-profile" element={<span>USER PROFILE PAGE</span>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}
export default AppRouters;