
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Page/Home"
import RegistrationForm from "./Page/RegistrationForm"
import {Toaster} from "react-hot-toast"

const App = () => {
  return (
    <div className='text-white '>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<RegistrationForm />} />
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App