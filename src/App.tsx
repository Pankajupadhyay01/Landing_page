
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Page/Home"
import RegistrationForm from "./Page/RegistrationForm"

const App = () => {
  return (
    <div className='text-white '>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<RegistrationForm />} />
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App