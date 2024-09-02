import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  contact_number: string;
  neetScore: string;
}

const RegistrationForm: React.FC = () => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    contact_number: '',
    neetScore: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiBaseUrl}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 200) {
        alert(data.msg);
        setFormData({
          name: '',
          email: '',
          contact_number: '',
          neetScore: '',
        });
      } else {
        alert(data.msg);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Div */}
      <div className="w-1/2 bg-gray-100 flex flex-col items-center justify-center p-8">
        <img
          src="/assets/Careerkick.png"
          alt="Logo"
          className="mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">SHIKSHA SAMAGAM 2.0  </h1>
        <p className="text-gray-600 text-center">
          Secure your spot in "Siksha Samagam 2.0 (2024)" and take the first step toward a successful career in BAMS. Seats are limited, so register now and ensure your future in the world of Ayurveda!

        </p>
      </div>

      {/* Right Div */}
      <div className="w-1/2 bg-white flex items-center justify-center p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">Contact Number</label>
            <input
              type="text"
              name="contact_number"
              value={formData.contact_number}
              onChange={handleChange}
              required
              maxLength={10}
              className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your contact number"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">NEET Score</label>
            <input
              type="number"
              name="neetScore"
              value={formData.neetScore}
              onChange={handleChange}
              required
              min={0}
              max={720}
              className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your NEET score"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Register
          </button>
          <p className="text-sm text-gray-500 text-center mt-4">
            By continuing, you agree to the <a href="/terms" className="text-green-500 underline">CareerKick Terms of Service</a> and <a href="/privacy" className="text-green-500 underline">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
