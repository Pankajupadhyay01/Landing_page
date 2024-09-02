import React from 'react';

const ScholarshipCard: React.FC = () => {
  return (
    <div className="bg-black   flex flex-col items-center text-white py-7 mt-4 rounded-lg shadow-lg">
      <div className="font-bold text-lg">
        Special Scholarship For Students With 300+ NEET Score
      </div>
      <div className="mt-2 text-base">
        Get Upto 25K Scholarship On College Tuition Fees By Attending This Webinar
      </div>
      <a
        target='_blank'
        href="/register"
        className="bg-gradient-to-r from-gray-900 via-green-900 to-green-700 mt-4 inline-block shadow-2xl bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition-transform transform hover:scale-105 animate-pulse "
      >
        Yes, I Want To Claim The Scholarship!
      </a>
    </div>
  );
};

export default ScholarshipCard;
