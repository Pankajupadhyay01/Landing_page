import Faq from "./Page/Faq"
import Hero from "./Page/Hero"
import Testimonials from "./Page/Testimonials"

const App = () => {
  return (
    <div className=' text-white '>
      <Hero />
      <div className="w-[95%] flex justify-center m-auto flex-col">
        <Testimonials />
        <Faq />
      </div>
    </div>
  )
}

export default App