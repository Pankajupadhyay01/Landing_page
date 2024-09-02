import Bonus from "./Components/Bonus/Bonus"
import ScholarshipCard from "./Components/ScholarshipCard"
import WebinarAudience from "./Components/WebinarAudience"
import Faq from "./Page/Faq"
import Hero from "./Page/Hero"
import Testimonials from "./Page/Testimonials"

const App = () => {
  return (
    <div className='text-white '>
      <Hero />
      <WebinarAudience/>
      <ScholarshipCard/>
      
      <div className="w-[90%] flex justify-center m-auto flex-col">
        <Testimonials />
        <Bonus/>
        <Faq />
      </div>
    </div>
  )
}

export default App