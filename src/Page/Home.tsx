import Bonus from "../Components/Bonus/Bonus"
import ScholarshipCard from "../Components/ScholarshipCard"
import WebinarAudience from "../Components/WebinarAudience"
import Faq from "./Faq"
import Hero from "./Hero"
import Testimonials from "./Testimonials"
import WhatYouLearn from "./WhatYouLearn"
import { WhyAttend } from "./WhyAttend"
const Home = () => {
    return (
        < >
            <Hero />
            <ScholarshipCard />
            <div className="md:w-[90%]  flex justify-center m-auto flex-col">
                <WhyAttend />
                <WebinarAudience />
                <WhatYouLearn />
                <Testimonials />
                <Bonus />
                <Faq />
                {/* <RegistrationForm /> */}
            </div>
        </ >
    )
}

export default Home
