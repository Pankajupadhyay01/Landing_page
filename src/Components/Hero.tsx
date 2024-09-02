import { useState, useEffect } from 'react';
import BackgroundWithCollision from "./ui/BackgroundWithCollision";

const Hero = () => {
    const [timeLeft, setTimeLeft] = useState(7200); // 2 hours in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;

        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };
    return (
        <BackgroundWithCollision>
            <div className=" w-full flex flex-col gap-5 md:gap-8 lg:gap-10 p-4 md:p-8 lg:p-10  bg-gradient-to-br from-indigo-900 via-purple-900 to-green-900 text-white rounded-lg shadow-2xl">
                {/* Header Section */}
                <div className="text-center">
                    <p className="uppercase font-extrabold text-yellow-400 text-lg md:text-4xl lg:text-5xl tracking-widest drop-shadow-lg">
                        Shiksha Samagham 2.0 (2024)
                    </p>
                    <p className="text-base md:text-2xl lg:text-3xl mt-4 text-gray-200">
                        For <span className="text-green-400 font-extrabold">BAMS Aspirants</span>
                    </p>
                </div>

                {/* Webinar Highlights Section */}
                <div className="font-bold text-sm md:text-lg flex flex-col md:flex-row justify-center w-full gap-5 md:gap-10">
                    <p className="w-full md:w-[30%] text-center bg-gray-700 p-3 rounded-md shadow-lg">
                        <span className="text-green-300">2 Hours</span> Webinar - 100% FREE
                    </p>
                    <p className="w-full md:w-[30%] text-center bg-gray-700 p-3 rounded-md shadow-lg">
                        <span className="text-yellow-300">5 September 2024</span> - 12PM
                    </p>
                    <p className="w-full md:w-[30%] text-center bg-gray-700 p-3 rounded-md shadow-lg">
                        Venue: <span className="text-blue-300">Zoom (Online)</span>
                    </p>
                </div>

                {/* Description Section */}
                <div className="font-bold text-xs md:text-lg text-center w-full">
                    <p className="w-full md:w-[80%] lg:w-[60%] mx-auto text-gray-300">
                        Get direct access to Top BAMS Colleges, Learn from experts in Ayurveda, apply directly to colleges & instantly Pre-Book Your Seat!
                    </p>
                </div>

                {/* Video Section */}
                <div className="p-9 md:p-10">
                    <div className="flex flex-col items-center">
                        <div className="h-[200px] md:h-[500px] w-full border-4 border-blue-500 rounded-xl overflow-hidden shadow-lg ">
                            <iframe
                                src="https://www.youtube.com/embed/DHNyeU1ZoMI"
                                title="India's Biggest Career Counselling Webinar 2021 | JEE Main 2021 🔥 | MARKS VS RANK VS COLLEGE"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                className='w-full h-full rounded-xl'
                            ></iframe>
                        </div>
                        <p className="text-xs md:text-lg font-extrabold animate-scaleText mt-4 text-center text-green-400">
                            👆 Watch This Video Before Going Anywhere 👆
                        </p>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className='flex flex-col items-center'>
                    <p className="uppercase bg-purple-700 text-white font-extrabold text-center tracking-widest text-sm md:text-lg py-3 rounded-lg shadow-md cursor-pointer px-2  w-fit">
                        Book Your Seat In The Webinar For Free!
                    </p>
                    <p className="text-center font-medium text-red-500 animate-jitter mt-4 text-sm md:text-base">
                        Only 23 Seats Are Left! Hurry Up.
                    </p>
                </div>

                {/* Countdown Timer Section */}
                <div className="flex flex-col items-center">
                    <p className="text-center font-extrabold text-lg md:text-xl">
                        Registrations Closing in
                    </p>
                    <p className="text-center text-2xl md:text-4xl font-semibold text-yellow-400 mt-2">
                        {formatTime(timeLeft)}
                    </p>
                </div>
            </div>
        </BackgroundWithCollision>
    );
}

export default Hero;
