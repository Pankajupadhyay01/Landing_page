import React from 'react';

const WebinarAudience: React.FC = () => {
  return (

    <div className="text-gray-800 py-8 px-6 rounded-lg shadow-lg mt-4">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center">Who Should Register for This Webinar:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border-2 hover:bg-slate-800 border-white text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold  mb-2">NEET Aspirants</h3>
          <p className="text-base">
            If you’ve taken the NEET exam and are considering a career in Ayurveda, this webinar is tailored for you. Learn how to use your score to get into top BAMS colleges.
          </p>
        </div>
        <div className="border-2 hover:bg-slate-800 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold  mb-2">Parents of NEET Students</h3>
          <p className="text-base">
            Concerned about your child’s future? This webinar will provide clarity on BAMS as a viable and rewarding career path.
          </p>
        </div>
        <div className="border-2 hover:bg-slate-800 border-white text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold  mb-2">BAMS Enthusiasts & Ayurveda Lovers</h3>
          <p className="text-base">
            Curious about the ancient science of Ayurveda? Explore how a BAMS degree can open doors to a fulfilling career in natural medicine.
          </p>
        </div>
        <div className=" border-2 hover:bg-slate-800 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold  mb-2">Career Counsellors & Educators</h3>
          <p className="text-base">
            Stay updated on the latest trends in BAMS education and get insights that will help you guide your students effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebinarAudience;
