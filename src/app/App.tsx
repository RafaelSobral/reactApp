import { BrowserRouter } from "react-router-dom"
import { Routes } from "./routes/index"
export const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}
