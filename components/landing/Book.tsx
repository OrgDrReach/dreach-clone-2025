"use client";
import { useState, useEffect } from "react";

const Book = ({ onClick }: { onClick?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Modified useEffect to handle onClick prop changes
  useEffect(() => {
    if (onClick !== undefined) {
      setIsOpen(true);
    }
  }, [onClick]);

  const handleCloseModal = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsOpen(false);
    // Reset states when modal closes
    setDate("");
    setEmail("");
    setNumber("");
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Booking with:", date, email, number);
    handleCloseModal(event as unknown as React.MouseEvent);
  };

  if (!isClient) return null;

  return (
    <>
      <span className="flex items-center justify-center">Book Now</span>
      {isOpen && (
        <div
          className="fixed z-10 inset-0 backdrop-blur-sm bg-black/30 overflow-y-auto h-full w-full flex justify-center items-start md:items-center pt-10 md:pt-0"
          onClick={handleCloseModal}
        >
          <div
            className="relative bg-white/90 dark:bg-gray-900 backdrop-filter rounded-lg shadow-lg p-6 mx-4 my-10 md:max-w-lg md:mx-auto"
            onClick={handleModalClick} // Add click handler to prevent bubbling
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Confirm Your Booking
              </h3>
              <div
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-800 rounded-full focus:outline-none cursor-pointer"
                title="Close Modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-black dark:text-white px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 transition duration-200"
                required
              />
              <input
                type="date"
                name="date"
                onChange={(e) => setDate(e.target.value)}
                className="w-full text-gray-400 dark:text-gray-100 px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring focus:text-black focus:ring-teal-500 focus:ring-opacity-50 transition duration-200"
                required
                placeholder="Select your Date"
              />
              <input
                type="text"
                name="number"
                autoComplete="tel"
                placeholder="Phone Number"
                onChange={(e) => setNumber(e.target.value)}
                className="w-full text-black dark:text-white px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 transition duration-200"
                required
              />
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-md hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-300"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Book;
