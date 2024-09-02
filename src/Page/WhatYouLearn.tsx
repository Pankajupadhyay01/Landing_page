import { useState, useEffect, useRef } from 'react';
import { timeLine, TimelineItem } from '../Data';
import Heading from '../Components/Headings';
import Hero from '../Components/Hero';

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
        <div>
            <Heading title="What You’ll Learn" />
            <div className="relative flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
                <div
                    ref={timelineRef}
                    className={`absolute w-1 h-full ${lineColor} transition-colors duration-300`}
                    style={{ left: '50%', transform: 'translateX(-50%)' }}
                ></div>

                {timeLine.map((item: TimelineItem, index: number) => (
                    <div
                        key={index}
                        className={`flex w-full mb-8 items-center ${index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}
                    >
                        <div className={`w-full sm:w-1/2 p-4 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                            <div className="bg-white p-4 rounded shadow-lg">
                                <h3 className="font-bold text-lg">{item.title}</h3>
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
