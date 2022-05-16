import React from "react";
import './Pagination.css';

export const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };
  const handleNext = () => {
    onNext();
  };

  return (
    <nav className="pagination">
      <ul className="pagination-list">
        {prev ? (
          <li className="pagination-list-element">
            <button className="pagination-list-element-button" onClick={handlePrevious}>Prev</button>
          </li>
        ) : null}
        {next ? (
          <li className="pagination-list-element">
            <button className="pagination-list-element-button" onClick={handleNext}>Next</button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};
