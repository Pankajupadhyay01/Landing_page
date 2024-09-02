import Bonus from "./Components/Bonus/Bonus"
import ScholarshipCard from "./Components/ScholarshipCard"
import WebinarAudience from "./Components/WebinarAudience"
import Faq from "./Page/Faq"
import Hero from "./Page/Hero"
import Testimonials from "./Page/Testimonials"
import WhatYouLearn from "./Page/WhatYouLearn"
import { WhyAttend } from "./Page/WhyAttend"
import RegistrationForm from "./Page/RegistrationForm"

const App = () => {
  return (
    <div className='text-white '>

      <Hero />
      <ScholarshipCard />
      <div className="md:w-[90%]  flex justify-center m-auto flex-col">
        <WhyAttend />
        <WebinarAudience />
        <WhatYouLearn />
        <Testimonials />
        <Bonus />
        <Faq />
        <RegistrationForm />
      </div>
    </div>
  )
}

export default App