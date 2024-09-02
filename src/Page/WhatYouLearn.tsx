import { useState, useEffect, useRef } from 'react';
import { timeLine } from '../Data';
import Heading from '../Components/Headings';

const WhatYouLearn = () => {
    const [lineColor, setLineColor] = useState<string>('bg-gray-400');
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const timeline = timelineRef.current;
            if (!timeline) return;

            const { top, height } = timeline.getBoundingClientRect();
            const screenHeight = window.innerHeight;

            if (top <= screenHeight / 2 && top + height >= screenHeight / 2) {
                setLineColor('bg-green-500');
            } else {
                setLineColor('bg-green-800');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='flex flex-col gap-10 pt-10'>
            <div>

                <Heading title={"What You’ll Learn"} />
            </div>

            <div className="relative flex flex-col items-center w-full">
                <div
                    ref={timelineRef}
                    className={`absolute w-1 h-full ${lineColor} transition-colors duration-300`}
                    style={{ left: '50%', transform: 'translateX(-50%)' }}
                ></div>

                {timeLine.map((item, index: number) => (
                    <div
                        key={index}
                        className={`flex w-full mb-8 items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} `}
                    >
                        <div className={`w-1/2 p-4 ${index % 2 === 0 ? 'text-left' : 'text-right'} `}>
                            <div className="bg-white p-4 rounded shadow-lg  bg-gradient-to-br from-white to-green-400">
                                <h3 className="font-bold text-lg text-black">{item.title}</h3>
                                <p className="mt-2 text-gray-700">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhatYouLearn;
