import Faq from "./Page/Faq"
import Hero from "./Page/Hero"
import Testimonials from "./Page/Testimonials"

const App = () => {
  return (
    <div className='bg-gradient-to-br from-indigo-900 via-purple-900 to-green-900 text-white '>
      <Hero />
      <div className="w-[90%] flex justify-center m-auto flex-col">
        <Testimonials />
        <Faq />
      </div>
    </div>
  )
}

export default App