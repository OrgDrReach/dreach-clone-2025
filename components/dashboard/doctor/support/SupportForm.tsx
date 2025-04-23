"use client";

import React, { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
  attachment: File | null;
}

const SupportRequestForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    attachment: null,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFormData({ ...formData, attachment: file || null });
    } else {
      setFormData({ ...formData, attachment: null });
    }
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="bg-[#ffffff] dark:bg-slate-800 shadow-md rounded-lg p-8 my-5 mx-auto">
      <h2 className="text-2xl font-semibold text-[#125872] dark:text-[#4db7dd] mb-6">
        Submit a Support Request
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block dark:text-gray-300 text-gray-800  mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border ${
              errors.name ? "border-red-500" : "border-gray-500"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600`}
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block dark:text-gray-300 text-gray-800  mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-500"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600`}
            placeholder="Your Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block dark:text-gray-300 text-gray-800 mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border ${
              errors.message ? "border-red-500" : "border-gray-500"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600`}
            placeholder="Describe your issue or feedback"
            rows={4}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <div>
          <label className="block dark:text-gray-300 text-gray-800  mb-1" htmlFor="attachment">
            Attachment
          </label>
          <input
            type="file"
            id="attachment"
            name="attachment"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-[#125872] hover:bg-[#3698bc] text-white font-semibold px-5 py-1.5 rounded-md shadow-md transition-colors duration-200 "
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default SupportRequestForm;
