import React from "react";

export const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };
  const handleNext = () => {
    onNext();
  };

  return (
    <nav>
      <ul>
        {prev ? (
          <li>
            <button onClick={handlePrevious}>Prev</button>
          </li>
        ) : null}
        {next ? (
          <li>
            <button onClick={handleNext}>Next</button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};
