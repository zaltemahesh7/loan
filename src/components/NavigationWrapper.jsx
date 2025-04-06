import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NavigationWrapper = ({ routes, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = routes.findIndex((route) => route === location.pathname);

  const goToNext = () => {
    if (currentIndex < routes.length - 1) {
      navigate(routes[currentIndex + 1]);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      navigate(routes[currentIndex - 1]);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">{children}</div>

      <div className="flex justify-between">
        <button
          onClick={goToPrev}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
        >
          ← Back
        </button>
        <button
          onClick={goToNext}
          disabled={currentIndex === routes.length - 1}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default NavigationWrapper;
