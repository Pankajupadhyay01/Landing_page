
import { Timeline } from "../Components/ui/timeline";

export function WhyAttend() {
    const data = [
        {
            title: "Direct College Applications",
            content: (
                <div>
                    <p className="text-neutral-200 text-sm md:text-xl font-normal mb-8">
                        Apply to top BAMS colleges instantly during the webinar—no hassle, just results.
                    </p>

                </div>
            ),
        },
        {
            title: "Expert Guidance from BAMS Professionals",
            content: (
                <div>
                    <p className="text-neutral-200 text-sm md:text-xl font-normal mb-8">
                        Learn directly from the experts about BAMS, career paths, and how to make the most of your NEET score.
                    </p>
                </div>
            ),
        },
        {
            title: "Explore Lucrative BAMS Careers",
            content: (
                <div>
                    <p className="text-neutral-200 text-sm md:text-xl font-normal mb-4">
                        Discover the rewarding career opportunities available with a BAMS degree and how to seize them.
                    </p>
                </div>
            ),
        },
        {
            title: "Exclusive Admission Tips",
            content: (
                <div>
                    <p className="text-neutral-200 text-sm md:text-xl font-normal mb-4">
                        Get insider tips on how to maximize your NEET score for BAMS admissions.
                    </p>
                </div>
            ),
        },
        {
            title: "Connect with Top Colleges",
            content: (
                <div>
                    <p className="text-neutral-200 text-sm md:text-xl font-normal mb-4">
                        Engage with representatives from leading BAMS colleges and start your journey to a successful career in Ayurveda.
                    </p>
                </div>
            ),
        },

    ];
    return (
        <div className="w-full">

            <Timeline data={data} />
        </div>
    );
}
