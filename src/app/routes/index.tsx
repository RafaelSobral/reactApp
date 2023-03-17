import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { Dashboard } from "../pages/dashboard/Dashboard"

export const Routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pagina-inicial" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/pagina-inicial" />} />
      </Routes>
    </BrowserRouter>
  )
}
