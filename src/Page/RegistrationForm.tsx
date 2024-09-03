import React, { useState, ChangeEvent, FormEvent } from "react";
import { stateDistrictData, courses } from "../constants/state_district";

interface FormData {
  name: string;
  email: string;
  contact_number: string;
  neetScore: string;
  neetAIR: string;
  state: string;
  district: string;
  course: string;
}

const RegistrationForm: React.FC = () => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contact_number: "",
    neetScore: "",
    neetAIR: "",
    state: "",
    district: "",
    course: "",
  });

  const [districts, setDistricts] = useState<string[]>([]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "state") {
      const selectedState = stateDistrictData.states.find(
        (s) => s.state === value
      );
      setDistricts(selectedState ? selectedState.districts : []);
      setFormData({ ...formData, state: value, district: "" }); // Reset district when state changes
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiBaseUrl}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 200) {
        alert(data.msg);
        setFormData({
          name: "",
          email: "",
          contact_number: "",
          neetScore: "",
          neetAIR: "",
          state: "",
          district: "",
          course: "",
        });
      } else {
        alert(data.msg);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Div */}
      <div className="w-full md:w-1/2 bg-gray-100 flex">
        <img
          src="/assets/webinar banner.png" // Replace with your image URL
          alt="Left Image"
          className="w-full h-full "
        />
      </div>

      {/* Right Div */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-4 md:p-8">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-4 md:space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Email
            </label>
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
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Contact Number
            </label>
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
            <label className="block mb-2 text-sm font-medium text-gray-600">
              NEET Score
            </label>
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
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              NEET AIR
            </label>
            <input
              type="number"
              name="neetAIR"
              value={formData.neetAIR}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your NEET AIR"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              State
            </label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select your state</option>
              {stateDistrictData.states.map((state, index) => (
                <option key={index} value={state.state}>
                  {state.state}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              District
            </label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select your district</option>
              {districts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Preferred Course
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select your preferred course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Register
          </button>
          <p className="text-sm text-gray-500 text-center mt-4">
            By continuing, you agree to the{" "}
            <a href="/terms" className="text-green-500 underline">
              CareerKick Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-green-500 underline">
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
