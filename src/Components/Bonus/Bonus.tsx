// src/PromotionalCards.tsx
import React from "react";

const Bonus: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 p-3 md:p-8">
      {/* Card 1 */}
      <div className="bg-gradient-to-r from-gray-900 via-green-900 to-green-700 text-white rounded-lg shadow-lg p-6 w-full max-w-md h-auto flex flex-col">
        <div className="flex flex-col flex-grow">
          <h2 className="text-2xl font-bold mb-2">Bonus 1</h2>
          <p className="text-lg mb-4">30 Mins One-On-One Counselling Session With Experts</p>
          <ul className="list-none space-y-2 mt-4 flex-grow">
            <li>✅ Personalized Guidance: Receive tailored advice on your BAMS admission strategy.</li>
            <li>✅ College Selection Help: Get expert recommendations for the best BAMS colleges based on your NEET score.</li>
            <li>✅ Budget Planning: Learn how to maximize your budget for top college options.</li>
            <li>✅ Exclusive Insider Tips: Gain insights into the BAMS admission process to boost your chances of success.</li>
          </ul>
        </div>
        <button className="bg-white text-gray-900 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition mt-4 w-full">
          Apply Now
        </button>
      </div>

      {/* Card 2 */}
      <div className="bg-gradient-to-r from-gray-900 via-green-900 to-green-700 text-white rounded-lg shadow-lg p-6 w-full max-w-md h-auto flex flex-col">
        <div className="flex flex-col flex-grow">
          <h2 className="text-2xl font-bold mb-2">Bonus 2</h2>
          <p className="text-lg mb-4">BAMS College Selection Ebook</p>
          <ul className="list-none space-y-2 mt-4 flex-grow">
            <li>✅ Previous Year Government College Cutoff</li>
            <li>✅ Previous Year Top 10 Private College Cutoff</li>
            <li>✅ Detailed Medical Courses Information</li>
            <li>✅ Detailed Info About BAMS & Ayush Counselling</li>
          </ul>
        </div>
        <button className="bg-white text-gray-800 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition mt-4 w-full">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Bonus;
