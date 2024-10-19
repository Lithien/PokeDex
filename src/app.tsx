import { Outlet } from "react-router-dom"
import Header from "./components/layout/header"

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
