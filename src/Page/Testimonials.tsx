import Heading from "../Components/Headings"
import { InfiniteMovingCards } from "../Components/ui/infinite-moving-cards"
import { testimonials } from "../Data"


const Testimonials = () => {
    return (
        <div className="flex flex-col gap-8 mx-7 pt-20">
            <Heading title={"See What Our Previous Students Are Saying About Us"} />

            <div className="h-[20rem] rounded-md flex flex-col antialiased bg-transprent bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    )
}

export default Testimonials
